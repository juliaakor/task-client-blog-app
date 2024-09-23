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
