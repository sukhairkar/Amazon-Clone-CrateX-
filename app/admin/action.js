// app/(whatever‑folder)/action.js
"use server";

import { prisma } from "@/lib/prisma";

/** CREATE (already present) */
export async function createProduct(formData) {
  const name        = formData.get("name");
  const img         = formData.get("img");
  const description = formData.get("description");
  const price       = Number(formData.get("price"));

  if (!name || !img || !description || !price) return;

  await prisma.product.create({
    data: { name, img, description, price },
  });
}

/** 🔄 UPDATE by id */
export async function updateProduct(id, formData) {
  const name        = formData.get("name");
  const img         = formData.get("img");
  const description = formData.get("description");
  const price       = Number(formData.get("price"));

  if (!name || !img || !description || !price) return;

  await prisma.product.update({
    where: { id },
    data: { name, img, description, price },
  });
}

/** ❌ Optional: DELETE by id */
export async function deleteProduct(id) {
  await prisma.product.delete({ where: { id } });
}
