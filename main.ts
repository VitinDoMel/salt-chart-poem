import * as fs from "node:fs";
import * as path from "node:path";

const poem: string =
  "Two grease pencils on a salt-damp chart.\n" +
  "You pulled the bearing north by seven degrees;\n" +
  "I put my compass away.\n" +
  "Not surrender—just the quiet agreement\n" +
  "that the reef is real, and one of us must steer.";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile: string = path.join(outputDir, "entry.txt");

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputFile, poem, { encoding: "utf8" });
