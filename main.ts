// News Image 24 Nov 2026 — entry program (Node 22, standard library only).
// The image is the entry.png beside this file; the program copies it to
// /output/entry.png. No network, deterministic: the same bytes every run.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
