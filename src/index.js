#!/usr/bin/env node
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const target = resolve(__dirname, "../demo/touched.txt");
writeFileSync(target, `Updated at: ${new Date().toISOString()}\n`);
console.log("Touched demo/touched.txt");
