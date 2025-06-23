// 'use client';

import Image from "next/image";
import Link from "next/link";
import styles from "./page.css";
import { Button } from "../components/ui/button";
// import { prisma } from "@/lib/prisma";
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

const prisma = new PrismaClient();

export async function getAllProducts() {
  return prisma.product.findMany({ orderBy: { id: 'desc' } });
}

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <Navbar/>
      <div className="prod">
        <h1>Discover Amazing Products</h1>
        <hr></hr>

        <div>

        <div className="prodbox">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          
        </div>

      </div>
    </div>
    </div>

      );
    }
  