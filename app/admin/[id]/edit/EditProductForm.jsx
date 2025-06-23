// app/admin/[id]/edit/EditProductForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { useTransition } from "react";
import { updateProduct } from "../../action"; // adjust relative path
import { useRouter } from "next/navigation";
import React, { useState } from 'react'
import "../../../page.css"

export default function EditProductForm({ product }) {
  const { register, handleSubmit,watch,setValue, formState: { errors } } = useForm({
    defaultValues: {
      name:        product.name,
      description: product.description,
      img:         product.img,
      price:       product.price,
    },
  });

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [loadingDesc, setLoadingDesc] = useState(false);

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

  const onSubmit = (data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([k, v]) => formData.append(k, v));

    startTransition(async () => {
      await updateProduct(product.id, formData);
      router.push("/admin");           // back to list
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      <input
        {...register("name", { required: true })}
        className="input input-bordered w-full"
        placeholder="Name"
      />
      {errors.name && <span className="error">Name required</span>}

      <textarea style={{backgroundColor: "white",borderRadius: "12px"}}
        {...register("description", { required: true })}
        rows={3}
        className="textarea textarea-bordered w-full"
      />
      {errors.description && <span className="error">Description required</span>}

      <input
        {...register("img", { required: true })}
        className="input input-bordered w-full"
        placeholder="Image URL"
      />
      {errors.img && <span className="error">Image URL required</span>}

      <input
        type="number"
        step="0.01"
        {...register("price", { required: true, valueAsNumber: true })}
        className="input input-bordered w-full"
        placeholder="Price"
      />
      {errors.price && <span className="error">Price required</span>}

       <button 
              type="button"
              onClick={generateDescription}
              disabled={loadingDesc}
              className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
            >
              {loadingDesc ? "Generating..." : "Auto Generate Description ✨"}
            </button>

      <button className="savechanges" disabled={isPending}>
        {isPending ? "Saving…" : "Save changes"}
      </button>
    </form>
  );
}
