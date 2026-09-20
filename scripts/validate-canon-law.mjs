import { readFile } from "node:fs/promises";
import path from "node:path";

const required=[
  "CANON.md",
  "canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md",
  "canon/REPOSITORY_CANON_LAW_1_0.md",
  "ARCHITECTURE.md"
];

const checks=[
  ["CANON.md","PART XXII — AODS & HAPI WORLD TIER II CANONICAL ACT"],
  ["CANON.md","ABBA remains the master intelligence/orchestrator and executor, never the legislator"],
  ["canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md","435-plate"],
  ["canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md","Unknown is not synonymous with malicious"],
  ["canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md","#R9"],
  ["canon/REPOSITORY_CANON_LAW_1_0.md","Identity (#) is distinct from authority"],
  ["ARCHITECTURE.md","canon/AODS_HAPI_WORLD_CANONICAL_ACT_2026-09-20.md"]
];

const violations=[];
for(const file of required){
  try{await readFile(path.resolve(file),"utf8")}catch{violations.push("MISSING:"+file)}
}
for(const [file,marker] of checks){
  try{
    const content=await readFile(path.resolve(file),"utf8");
    if(!content.includes(marker)) violations.push("MISSING_MARKER:"+file+":"+marker);
  }catch{}
}

const canon=await readFile(path.resolve("CANON.md"),"utf8").catch(()=> "");
if(canon.includes("AODS")===false) violations.push("AODS_NOT_REGISTERED_IN_CANON");
if(canon.includes("435-plate")===false) violations.push("PLATE_COVERAGE_NOT_REGISTERED");

if(violations.length){
  console.error("CANON_LAW_VIOLATION");
  for(const v of violations) console.error("- "+v);
  process.exit(1);
}
console.log("HAPI_WORLD_CANON_CONFORMANCE_PASSED");
