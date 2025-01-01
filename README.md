# `Turborepo` Vite starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e https://github.com/suhanda/monorepo-template
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `web`: another [React](https://react.dev/) [vite](https://vitejs.dev) ts app
- [tanstack](https://tanstack.com/) router
- [tanstack](https://tanstack.com/) query
- [tailwind](https://tailwindcss.com/)
- `@repo/eslint-config`: shared `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/jest-config`: `jest` base configurations for monorepo
- `@repo/cli`: cli to can be used for CI/CD for preparation productions

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
