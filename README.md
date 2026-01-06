# codesandbox-cli-template

Template for demoing CLI tools in CodeSandbox.

[![Open in CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/p/github/yowainwright/codesandbox-cli-template)

## Setup

```bash
bun run setup
```

## Structure

After setup, your project will have an idiomatic structure for your chosen language:

**Bun/Node.js:**
```
src/index.{ts,js}
demo/
```

**Go:**
```
cmd/mycli/main.go
demo/
go.mod
go.work
```

**Python:**
```
src/mycli/
demo/
pyproject.toml
```

## Run

```bash
bun run src/index.ts
```

## Use in Existing Project

```bash
bunx degit yowainwright/codesandbox-cli-template my-cli-demo
```
