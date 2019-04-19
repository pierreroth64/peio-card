#!/usr/bin/env node

const figlet = require("figlet");
const chalk = require("chalk");
const boxen = require("boxen");
const options = {
  padding: 1,
  margin: 1,
  align: "center",
  borderStyle: "round",
  borderColor: "cyan"
};
const fs = require("fs");
const path = require("path");

let output = `
       ${cardTitle("peio", "Bulbhead")}

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

function cardTitle(text, font) {
  const title = figlet.textSync(text, {
    font,
    horizontalLayout: "default",
    verticalLayout: "default"
  });
  return `\n${title
    .split("\n")
    .map(line => `${chalk.cyan.bold(line)}`)
    .join("\n")}`;
}
