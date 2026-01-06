import type { LanguageConfig } from "./types";

export const README_RUN_PATTERN = /## Run\n\n```bash\n[\s\S]*?\n```/;
export const README_RUN_TEMPLATE = "## Run\n\n```bash\n{{cmd}}\n```";

export const languages: Record<string, LanguageConfig> = {
  bun: {
    name: "Bun",
    demoDir: "demo-ts",
    remove: [
      "src/index.js",
      "cmd",
      "src/mycli",
      "demo-go",
      "demo-py",
      "demo-js",
      "go.mod",
      "go.work",
      "pyproject.toml",
    ],
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
    demoDir: "demo-js",
    remove: [
      "src/index.ts",
      "cmd",
      "src/mycli",
      "demo-go",
      "demo-py",
      "demo-ts",
      "go.mod",
      "go.work",
      "pyproject.toml",
      "tsconfig.json",
    ],
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
    demoDir: "demo-go",
    remove: [
      "src",
      "demo-py",
      "demo-ts",
      "demo-js",
      "pyproject.toml",
      "tsconfig.json",
      "package.json",
    ],
    tasks: {
      setupTasks: [],
      tasks: {
        run: { name: "Run CLI", command: "go run ./cmd/mycli", runAtStart: true },
      },
    },
    rootPkg: () => ({}),
    run: "go run ./cmd/mycli",
  },

  python: {
    name: "Python",
    demoDir: "demo-py",
    remove: [
      "src/index.ts",
      "src/index.js",
      "cmd",
      "demo-go",
      "demo-ts",
      "demo-js",
      "go.mod",
      "go.work",
      "tsconfig.json",
    ],
    tasks: {
      setupTasks: [],
      tasks: {
        run: { name: "Run CLI", command: "python -m src.mycli", runAtStart: true },
      },
    },
    rootPkg: (name) => ({
      name,
      version: "1.0.0",
      private: true,
    }),
    run: "python -m src.mycli",
  },
};
