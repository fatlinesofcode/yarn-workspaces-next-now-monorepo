# Yarn workspaces example
## Updated to include Now examples for routing with multiple Next.js apps

## How to use

Download the example:

Install it and run:

```bash
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now -A now-site1.json
now -A now-site2.json
```

## The idea behind the example

Workspaces are a new way to setup your package architecture that’s available by default starting from Yarn 1.0. It allows you to setup multiple packages in such a way that you only need to run yarn install once to install all of them in a single pass.

In this example we have three workspaces:

- **site1**: A Next.js app
- **site2**: A Next.js app
- **shared**: Shared React components, that gets compiled by Next.js

## Useful Links

- [Documentation](https://yarnpkg.com/en/docs/workspaces)
- [yarn workspaces](https://yarnpkg.com/lang/en/docs/cli/workspace)
- [yarn workspace](https://yarnpkg.com/lang/en/docs/cli/workspaces)
- [next-transpile-modules](https://www.npmjs.com/package/next-transpile-modules)
