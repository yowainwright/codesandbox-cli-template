#!/usr/bin/env bun
const targetFile = new URL("../packages/demo/touched.txt", import.meta.url);
const timestamp = new Date().toISOString();

await Bun.write(targetFile, `Updated at: ${timestamp}\n`);
console.log(`Touched packages/demo/touched.txt at ${timestamp}`);
