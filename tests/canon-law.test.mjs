import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("HAPI World additive AODS/Tier II act is registered in CANON.md",async()=>{
  const canon=await readFile("CANON.md","utf8");
  assert.match(canon,/PART XXII — AODS & HAPI WORLD TIER II CANONICAL ACT/);
  assert.match(canon,/ABBA remains the master intelligence\/orchestrator and executor, never the legislator/);
});

test("HAPI World act keeps unknown-state and R9 experiment explicit",async()=>{
  const act=await readFile("canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md","utf8");
  assert.match(act,/#R9/);
  assert.match(act,/Unknown is not synonymous with malicious/);
  assert.match(act,/435-plate/);
});
