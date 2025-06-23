// app/admin/[id]/edit/page.jsx

import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import EditProductForm from "./EditProductForm"; // client form

export default async function EditPage({ params }) {
  const id = params.id;

  if (!id || typeof id !== "string") return notFound(); // ✅ string guard

  const product = await prisma.product.findUnique({
    where: { id }, // ✅ use id as string
  });

  if (!product) return notFound();

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <EditProductForm product={product} />
    </div>
  );
}
