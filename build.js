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

https://${chalk.magenta("about")}.me/${chalk.cyanBright("peioroth")}`;

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
    .map(line => `${chalk.cyanBright.bold(line)}`)
    .join("\n")}`;
}
