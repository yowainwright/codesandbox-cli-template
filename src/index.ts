#!/usr/bin/env bun
const target = new URL("../demo/touched.txt", import.meta.url);
await Bun.write(target, `Updated at: ${new Date().toISOString()}\n`);
console.log("Touched demo/touched.txt");
