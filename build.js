#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
  borderColor: "cyan"
};
const fs = require("fs");
const path = require("path");

let output = `
       ${chalk.cyan.bold("  ____ ____  __  __   ")}
       ${chalk.cyan.bold(" (  _ (  __)(  )/  \\  ")}
       ${chalk.cyan.bold("  ) __/) _)  )( ( O )")}
       ${chalk.cyan.bold(" (__) (____)(__) \\__/ ")}

∙ Developer at @eove loving TDD, DDD, XP, ...
∙ Crafting software in front of the Pyrenees
∙ Trying to play the guitar... #NoComment ;)

  https://${chalk.blue("twitter")}.com/${chalk.cyan("peioroth64")}
      https://${chalk.cyan("peio")}.now.sh
   https://${chalk.blue("github")}.com/${chalk.cyan("pierreroth64")} 
 https://${chalk.blue("linkedin")}.com/in/${chalk.cyan("pierreroth")}
          $ npx ${chalk.cyan("peio")}`;

const [, ...trimmed] = output.split("\n");
const card = chalk.white(boxen(trimmed.join("\n"), options));
fs.writeFileSync(path.join(__dirname, "bin/output"), card);
console.log(card);
