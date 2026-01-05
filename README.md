# codesandbox-cli-template

Template for demoing CLI tools in CodeSandbox.

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/YOUR_USERNAME/codesandbox-cli-template)

## Structure

```
├── cli/           # CLI (runs at root)
├── packages/
│   └── demo/      # Target package CLI operates on
└── .codesandbox/
    └── tasks.json
```

## Run

```bash
bun install
bun run mycli
```
