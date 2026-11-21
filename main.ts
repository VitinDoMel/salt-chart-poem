import * as fs from "node:fs";
import * as path from "node:path";

const poem: string =
  "Cold coffee by my elbow at two a.m.\n" +
  "You cross out my safe detour, draw the straighter line\n" +
  "I was too tired to see.\n" +
  "My finger rests on Return—\n" +
  "the narrow hinge where what you saw becomes what I have done.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile: string = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, poem, { encoding: "utf8" });
