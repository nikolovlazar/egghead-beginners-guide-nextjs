# Exercise 13: Use the Server-side Rendering method

## Background

In the [previous exercise](../exercise-12--use-the-static-generation-method) we learned about Next.js's Static Generation method. In this exercise we're going to explore the Server-side Rendering method.

Just like the Static Generation, SSR (Server-side Rendering) is another way of data fetching supported in Next.js. The difference between SSR and SSG is that in SSR the data gets fetched for every request, while in SSG the data used to be fetched on build-time. This method is good for pages that have dynamic data, data that changes often.

When the user requests a SSR page, the server fetches the data (queries the DB, uses third-party APIs etc...), generates the HTML, and then gets it back to the browser. Compared to the SSG, the requests in SSR are slower, but that's the price to pay to have dynamic data.

To apply the SSR method in Next.js, we need to export a `getServerSideProps` method from our page:

```typescript
// pages/index.tsx

import type { GetServerSideProps } from 'next'

...

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  return {
    props: {
      ...
    }
  }
}
```

The `context` object is similar to SSG's context, but it also includes:
- `req`: the HTTP IncomingMessage object, plus additional parsing helpers
- `res`: the HTTP response object
- `query`: an object representing the query string

Unlike SSG, with SSR we don't need to provide a method similar to the `getStaticPaths`, because every request generates an HTML file, so no HTML files need to be generated at build-time.

## 🚀 Exercise

Refactor the previous exercise's solution to use SSR instead.

## ⭐️ Challenge

To really exploit the power of SSR, utilize the `query` from the context to filter the music genres.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+13+-+Use+the+Server-side+Rendering+method) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.