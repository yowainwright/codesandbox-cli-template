import { rmSync } from "node:fs";
import {
  languages,
  README_RUN_PATTERN,
  README_RUN_TEMPLATE,
} from "./constants";
import type { LanguageConfig } from "./types";

async function prompt(question: string, options: string[]): Promise<string> {
  console.log(`\n${question}`);
  options.forEach((opt, i) => console.log(`  ${i + 1}. ${opt}`));
  process.stdout.write("\nChoice: ");

  for await (const line of console) {
    const choice = parseInt(line.trim()) - 1;
    if (choice >= 0 && choice < options.length) {
      return options[choice];
    }
    process.stdout.write("Invalid choice. Try again: ");
  }
  return options[0];
}

async function selectLanguage(): Promise<LanguageConfig> {
  const langKeys = Object.keys(languages);
  const langNames = langKeys.map((k) => languages[k].name);
  const chosenName = await prompt("Select language:", langNames);
  const langKey = langKeys[langNames.indexOf(chosenName)];
  return languages[langKey];
}

function removeUnusedFiles(lang: LanguageConfig) {
  for (const file of lang.remove) {
    rmSync(file, { force: true });
  }
}

async function writeTasks(lang: LanguageConfig) {
  const tasks = {
    $schema: "https://codesandbox.io/schemas/tasks.json",
    ...lang.tasks,
  };
  await Bun.write(".codesandbox/tasks.json", JSON.stringify(tasks, null, 2));
}

async function updatePackageJson(lang: LanguageConfig) {
  const currentPkg = await Bun.file("package.json").json();
  const newPkg = lang.rootPkg(currentPkg.name || "my-cli-demo");
  await Bun.write("package.json", JSON.stringify(newPkg, null, 2));
}

async function updateReadme(lang: LanguageConfig) {
  const readme = await Bun.file("README.md").text();
  const updatedReadme = readme.replace(
    README_RUN_PATTERN,
    README_RUN_TEMPLATE.replace("{{cmd}}", lang.run)
  );
  await Bun.write("README.md", updatedReadme);
}

function cleanup() {
  rmSync("scripts", { recursive: true, force: true });
  rmSync(".github/workflows/setup-template.yml", { force: true });
}

export async function setup() {
  const lang = await selectLanguage();

  removeUnusedFiles(lang);
  await writeTasks(lang);
  await updatePackageJson(lang);
  await updateReadme(lang);
  cleanup();

  console.log(`\nDone! Run: ${lang.run}`);
}

setup();
