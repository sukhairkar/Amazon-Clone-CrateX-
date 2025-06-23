module.exports = {

"[project]/.next-internal/server/app/api/generate-description/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[project]/app/api/generate-description/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// // // /app/api/generate-description/route.ts
// // // import { GoogleGenerativeAI } from "@google/generative-ai";
// // // import { NextResponse } from "next/server";
// // // const genAI = new GoogleGenerativeAI(AIzaSyAHxwjKCFwx2bhTSpTklBhGrgLooik_iYI);
// // // export async function POST(req) {
// // //   const { name } = await req.json();
// // //   if (!name) {
// // //     return NextResponse.json({ error: "Product name required." }, { status: 400 });
// // //   }
// // //   try {
// // //     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
// // //     const prompt = `Write a short, attractive product description for a product called "${name}". 
// // // It should sound natural, suitable for an online store, and not exceed 60 words.`;
// // //     const result = await model.generateContent(prompt);
// // //     const response = await result.response;
// // //     const text = response.text().trim();
// // //     return NextResponse.json({ description: text });
// // //   } catch (error) {
// // //     console.error("Gemini error:", error);
// // //     return NextResponse.json({ error: "Failed to generate description." }, { status: 500 });
// // //   }
// // // }
// // export async function POST(req) {
// //   try {
// //     const { prompt } = await req.json();
// //     // Dummy description for testing
// //     const description = `This is a generated description based on: ${prompt}`;
// //     return new Response(JSON.stringify({ description }), {
// //       status: 200,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   } catch (err) {
// //     console.error("API error:", err);
// //     return new Response(JSON.stringify({ error: "Failed to generate" }), {
// //       status: 500,
// //       headers: { "Content-Type": "application/json" },
// //     });
// //   }
// // }
// import { GoogleGenerativeAI } from "@google/generative-ai";
// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();
//     const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
//     const model = genAI.getGenerativeModel({ model: "gemini-pro" });
//     const result = await model.generateContent(
//       `Write a short and vivid product description for: ${prompt}. 
//        Keep it under 50 words. It should be engaging, informative, and sound like real e-commerce copy.`
//     );
//     const description = result.response.text();
//     return new Response(JSON.stringify({ description }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("Gemini error:", err);
//     return new Response(JSON.stringify({ error: "Failed to generate" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
__turbopack_context__.s({
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@google/generative-ai/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$process__$5b$external$5d$__$28$process$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/process [external] (process, cjs)");
;
;
async function POST(res) {
    try {
        const { prompt } = await res.json();
        const genAI = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$google$2f$generative$2d$ai$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["GoogleGenerativeAI"](("TURBOPACK compile-time value", "AIzaSyC_lKrsLeA3EkFboS_N0eGp0pvd95bESP8"));
        const model = genAI.getGenerativeModel({
            model: "gemini-pro"
        });
        const result = await model.generateContent(`Write a short, vivid e‑commerce product description (≤50 words) for: ${prompt}`);
        const description = result.response.text();
        return new Response(JSON.stringify({
            description
        }), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (err) {
        console.error("Gemini error:", err);
        return new Response(JSON.stringify({
            error: "Failed to generate"
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__514ad698._.js.map