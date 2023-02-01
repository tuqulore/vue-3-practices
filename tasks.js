const { join } = require("node:path");
const { readdir, readFile, writeFile } = require("node:fs/promises");

/** .codesandbox/tasks.json のタスクの生成 */
async function main() {
  const path = join(".codesandbox", "tasks.json");
  try {
    const source = await readFile(path, "utf8");
    const files = await readdir(".");
    const handsons = files.filter((file) => file.startsWith("handson"));
    const practices = files.filter((file) => file.startsWith("practice"));
    const inputs = [...handsons, ...practices];
    taskEntries = inputs.map((input) => [
      input,
      { name: `Start ${input}`, command: `yarn --cwd ${input} dev` },
    ]);
    await writeFile(
      path,
      JSON.stringify(
        {
          ...JSON.parse(source),
          tasks: Object.fromEntries(taskEntries),
        },
        null,
        2
      )
    );
  } catch (error) {
    console.error(error);
  }
}

main();
