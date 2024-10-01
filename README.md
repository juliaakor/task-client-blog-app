# task-client-blog-app

## Getting Started

After cloning the repo, consult package.json for the requirements with regard to nodejs and yarn versions. Install dependencies with:

```bash
yarn
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

For the full list of available scripts (yarn lint, yarn test, yarn build, etc.), please consult scripts section of package.json or scripts section of the documentation for additional decription.

## Scripts

Run the scripts using:

```bash
yarn <script_name>
```

At the moment, the following scripts can be run within the project:

- clean - delete the build folder and all its files using rm;
- clean:npm - delete the node_modules folder and all its files with rm;
- dev - launch the application in development mode;
- build - create an optimised production build of the application;
- start - start the application n production mode with the created build;
- lint - check for all the existing eslint errors and warnings in the files;
- lint:fix - fix all eslint errors and warnings available for fixing;
- prettier - check for all code style issues in files;
- prettier:fix - fix all the code style issues in files;
- test - run tests and watch files for changes to rerun tests related to changed files;
- test:all - run tests and watch files for changes to rerun all tests when something changes;
- test:ci - running tests in a ci environment;
- test:coverage - delete the coverage folder and open a new coverage report after the tests have been executed;
- playwright - to run playwright tests;
- playwright:ui - to open playwright tests in ui mode;
- playwright:report - to open playwright report after running tests;
- playwright:headless - opens playwright to run tests in a headed mode;
- playwright:trace - runs playwright tests for debugging with trace;

**Note**: The following commands use the `.gitignore` file instead of their own ignore file: `lint`, `lint:fix`, `prettier`, `prettier:fix`.
