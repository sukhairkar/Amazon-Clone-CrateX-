'use client'
import React, { useState } from 'react'
import Navbar from "@/components/Navbar"
import { useForm } from 'react-hook-form'
import '../page.css'
import { createProduct } from './action'
import { motion } from 'framer-motion'


export default function App() {
  const [loadingDesc, setLoadingDesc] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  // ✅ Separate function to generate product description
  const generateDescription = async () => {
    const name = watch("name");
    if (!name) {
      alert("Please enter a product name");
      return;
    }

    setLoadingDesc(true);

    try {
      const res = await fetch("/api/generateDescription", {
        method: "POST",
        body: JSON.stringify({ name }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.description) {
        setValue("description", data.description);
      } else {
        alert("Failed to generate description");
      }
    } catch (err) {
      console.error("Error generating description:", err);
      alert("Something went wrong during description generation.");
    }

    setLoadingDesc(false);
  };

  // ✅ Submit handler
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("img", data.img);
    formData.append("price", data.price);

    try {
      await createProduct(formData); // Server action: saves to DB
      reset();
      alert("Product added successfully!");
    } catch (err) {
      console.error("Submit error:", err);
      alert("Something went wrong – check the console.");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="heading">Add A Product </h1>
      <hr id='line'></hr>
      <div className="Forms">
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
        <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            
            <h3>Product Name</h3>
            <label className="form-label">
              <input
                className="form-input"
                {...register("name", { required: true })}
                placeholder="Cosmetic, Clothing, Food etc."
              />
            </label>

            <br />
            <h3>Enter Product Description</h3>
            <label className="form-label">
              <input
                className="form-input"
                {...register("description", { required: true })}
                placeholder="Enter a short description of the product"
              />
              {errors.description && (
                <span className="error">Description is required</span>
              )}
            </label>

            <br />
            <h3>Image URL</h3>
            <label className="form-label">
              <input
                className="form-input"
                {...register("img", { required: true })}
                placeholder="Product Image URL"
              />
            </label>

            <br />
            <h3>Price of the Product</h3>
            <label className="form-label">
              <input
                type="number"
                className="form-input"
                {...register("price", { required: true })}
                placeholder="Price"
              />
            </label>

            <br />
            {/* ✅ Description Generator Button */}
            <button 
              type="button"
              onClick={generateDescription}
              disabled={loadingDesc}
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              {loadingDesc ? "Generating..." : "Auto Generate Description ✨"}
            </button>

            <br />
            <div className="submitbutton">
              <button type="submit">Add Product</button>
            </div>
          </div>
        </form>
        </motion.div>
      </div>
    </div>
    
  );
}
