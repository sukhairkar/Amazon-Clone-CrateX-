import { NextResponse } from "next/server";
import { generateProductDescription } from "@/lib/gemini";

export async function POST(req) {
  const { name } = await req.json();

  if (!name) {
    return NextResponse.json({ error: "Missing product name" }, { status: 400 });
  }

  try {
    const description = await generateProductDescription(name);
    return NextResponse.json({ description });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
