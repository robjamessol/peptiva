#!/usr/bin/env node
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = process.cwd();
const SRC = join(ROOT, "src");

const FORBIDDEN = [
  "treats",
  " cure ",
  "cures",
  " prevent ",
  "prevents",
  "therapeutic",
  "clinical-grade",
  "prescribed",
  "prescription",
  "weight loss",
  "muscle gain",
  "anti-aging",
  "anti aging",
  "ozempic",
  "wegovy",
  "trulicity",
  "saxenda",
  "human dosage",
  "human dose",
  "humans should",
  "for users",
];

const ALLOWLIST_DIRS = [
  join("src", "app", "blog"),
  join("src", "lib", "data", "blog.ts"),
  "docs",
];

const SKIP_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "scripts",
]);

let problems = [];

function walk(dir) {
  for (const f of readdirSync(dir)) {
    if (SKIP_DIRS.has(f)) continue;
    const p = join(dir, f);
    const s = statSync(p);
    if (s.isDirectory()) {
      walk(p);
      continue;
    }
    if (!/\.(tsx?|md|mdx|json)$/.test(f)) continue;
    const rel = relative(ROOT, p);
    if (ALLOWLIST_DIRS.some((a) => rel.startsWith(a))) continue;
    if (rel === "src/lib/ruo.ts") continue;
    if (rel === "scripts/lint-ruo.mjs") continue;
    const content = readFileSync(p, "utf8").toLowerCase();
    for (const phrase of FORBIDDEN) {
      const idx = content.indexOf(phrase);
      if (idx !== -1) {
        problems.push({ rel, phrase: phrase.trim(), idx });
      }
    }
  }
}

walk(SRC);
const DOCS = join(ROOT, "docs");
try {
  statSync(DOCS);
  // docs is intentionally allowlisted above; nothing to do here
} catch {
  /* docs may not exist yet */
}

if (problems.length > 0) {
  console.error("✖  RUO compliance check failed:\n");
  for (const p of problems) {
    console.error(`  ${p.rel}: forbidden phrase "${p.phrase}"`);
  }
  console.error(
    `\n${problems.length} violation${problems.length === 1 ? "" : "s"} found. Fix or move content into src/app/blog (educational).`,
  );
  process.exit(1);
}

console.log("✓  RUO compliance check passed.");
