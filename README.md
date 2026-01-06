# codesandbox-cli-template

Template for demoing CLI tools in CodeSandbox.

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/yowainwright/codesandbox-cli-template)

## Setup

```bash
bun run setup
```

## Structure

```
├── src/              # CLI source (Bun/Node/Go/Python)
├── packages/
│   └── demo/         # Target package CLI operates on
└── .codesandbox/
    └── tasks.json
```

## Run

```bash
bun run src/index.ts
```

## Use in Existing Project

```bash
bunx degit yowainwright/codesandbox-cli-template my-cli-demo
```
