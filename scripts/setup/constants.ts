import type { LanguageConfig } from "./types";

export const README_RUN_PATTERN = /## Run\n\n```bash\n[\s\S]*?\n```/;
export const README_RUN_TEMPLATE = "## Run\n\n```bash\n{{cmd}}\n```";

export const languages: Record<string, LanguageConfig> = {
  bun: {
    name: "Bun",
    keep: ["src/index.ts", "tsconfig.json", "packages/demo/tsconfig.json"],
    remove: ["src/index.js", "src/main.go", "src/__init__.py", "src/__main__.py", "go.mod"],
    tasks: {
      setupTasks: [{ name: "Install", command: "bun install" }],
      tasks: {
        run: { name: "Run CLI", command: "bun run src/index.ts", runAtStart: true },
      },
    },
    rootPkg: (name) => ({
      name,
      version: "1.0.0",
      private: true,
      scripts: { start: "bun run src/index.ts" },
    }),
    run: "bun run src/index.ts",
  },

  node: {
    name: "Node.js",
    keep: ["src/index.js", "tsconfig.json", "packages/demo/tsconfig.json"],
    remove: ["src/index.ts", "src/main.go", "src/__init__.py", "src/__main__.py", "go.mod"],
    tasks: {
      setupTasks: [{ name: "Install", command: "npm install" }],
      tasks: {
        run: { name: "Run CLI", command: "node src/index.js", runAtStart: true },
      },
    },
    rootPkg: (name) => ({
      name,
      version: "1.0.0",
      private: true,
      type: "module",
      scripts: { start: "node src/index.js" },
    }),
    run: "node src/index.js",
  },

  go: {
    name: "Go",
    keep: ["src/main.go", "go.mod"],
    remove: ["src/index.ts", "src/index.js", "src/__init__.py", "src/__main__.py", "tsconfig.json", "packages/demo/tsconfig.json"],
    tasks: {
      setupTasks: [],
      tasks: {
        run: { name: "Run CLI", command: "go run src/main.go", runAtStart: true },
      },
    },
    rootPkg: (name) => ({
      name,
      version: "1.0.0",
      private: true,
    }),
    run: "go run src/main.go",
  },

  python: {
    name: "Python",
    keep: ["src/__init__.py", "src/__main__.py"],
    remove: ["src/index.ts", "src/index.js", "src/main.go", "go.mod", "tsconfig.json", "packages/demo/tsconfig.json"],
    tasks: {
      setupTasks: [],
      tasks: {
        run: { name: "Run CLI", command: "python -m src", runAtStart: true },
      },
    },
    rootPkg: (name) => ({
      name,
      version: "1.0.0",
      private: true,
    }),
    run: "python -m src",
  },
};
