# Exercise 02: Create and navigate between pages

## Background

In Next.js, every page is a React component that lives in the `pages/` directory. Every other React component that lives outside of the `pages/` directory is not being considered as a page. Next.js's built-in router generates our routes automatically based on our project structure. For example:

- The index `/` page would be the `pages/index.tsx` file,
- The `/about` page would be `pages/about.tsx` file,
- The `docs/getting-started` page would be `pages/docs/getting-started.tsx` file, and so on.

To navigate between pages, Next.js provides us a `Link` component that's exported from the `next/link` package. To create a link to our About page, we can do the following:

```typescript
import Link from 'next/link'

const Home = () => {
  return (
    <Link href="/about">About</Link>
  )
}

export default Home;
```

## 🚀 Exercise

Create a new "About" page and add a link in the Home page to it.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+02+-+Create+and+navigate+between+pages) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.