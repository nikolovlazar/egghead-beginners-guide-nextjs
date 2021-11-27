# Lesson 01: Create a new Next.js TypeScript project

## What is Next.js?

Next.js is an open-source full-stack React framework built on top of Node.js. It enables developers to build super fast, optimized web sites and web apps. While traditional React apps are rendered on the client-side, Next.js gives you the option to also render your pages on the server-side. Its features like built-in router, per-page rendering options, automatic static optimization, provide a best in class developer experience and rapid feature development. The React documentation lists Next.js as a "Recommended Toolchain" for building a server-side rendered React apps. It is originally built by Guillermo Rauch, and it is developed and maintained by Vercel.

## Background

NPM has a tool called `npx` used for executing NPM Package Binaries. You can install it by running `npm install -g npx` in your terminal. We can use the `npx` tool to execute packages like `create-react-app` and `create-next-app` that will scaffold our new project.

## 🚀 Exercise

In this lesson we're going to create an empty Next.js TypeScript project using the [create-next-app](https://www.npmjs.com/package/create-next-app) npx template. Because we want to use TypeScript, we need to provide an additional argument in the CLI command to tell `create-next-app` to create our project with TypeScript.

To create your Next.js project, `cd` into the `/lessons` folder and run `npx create-next-app lesson-01 --typescript`. After the project gets created, `cd` `lesson-01` and execute `npm run dev`. If everything's correct, you should see a "Welcome to Next.js!" page.
