// app/admin/page.jsx  (server component)

import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { deleteProduct } from "./action";
import Navbar from "@/components/Navbar";
import "../page.css"

export default async function AdminPage() {
  const products = await prisma.product.findMany({ orderBy: { id: "desc" } });

  return (
    <div>
      <Navbar></Navbar>
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Admin – Products</h1>
        <hr></hr>
      <table className="w-full text-left">
        <thead>
          
          <tr className="border-b">
            <th className="py-2">ID</th>
            <th>Name</th>
            <th>Price (₹)</th>
            <th className="w-40">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id} className="border-b">
              <td className="py-2">{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td className="flex gap-2">
                {/* Edit */}
                <Link
                  href={`/admin/${p.id}/edit/`}
                  className="btn btn-sm btn-secondary"
                >
                  Edit
                </Link>

                {/* Delete (simple, no confirmation) */}
                <form
                  action={async () => {
                    "use server";
                    await deleteProduct(p.id);
                  }}
                >
                  <button className="btn btn-sm btn-error">Delete</button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
