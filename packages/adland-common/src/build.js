const { exec } = require("child_process");
const fs = require("fs");

const stage = process.env.STAGE;

if (!stage || (stage !== "testnet" && stage !== "mainnet")) {
  console.error("Please provide a valid stage (testnet or mainnet)");
  process.exit(1);
}

// Adjust the paths according to your project structure
const stageFile = `src/constants.${stage}.ts`;
const mainFile = `src/constants.ts`;

// This example simply copies the selected stage file to main.ts
// You might want to adjust this logic depending on your project's requirements
fs.copyFileSync(stageFile, mainFile);

// Now compile the TypeScript project
exec("tsc", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});
