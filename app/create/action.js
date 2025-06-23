"use server";

import { prisma } from "@/lib/prisma";

export async function createProduct(formData){
    const name = formData.get('name');
    const img = formData.get('img');
    const description = formData.get('description');
    const price = Number(formData.get('price'));

    if (!name || !img || !description || !price ) return;

    await prisma.product.create({
    data: { 
     name,img, description, price
     },
  });

}