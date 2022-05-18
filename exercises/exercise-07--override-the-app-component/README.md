# Exercise 07: Override the App Component

## Background
Every page in Next.js is initialized by an `App` component. By default it's hidden (internal in Next.js), but we can override it to control the page initialization if we want to:
- Persist layout between page changes
- Keep state when navigating pages
- Custom error handling
- Inject additional data into pages
- Add global CSS

To override the default `App`, we need to create the `pages/_app.tsx` file:

```typescript
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
```

> Mind the underscore before "app": `_app.tsx`

The `Component` component is our currently displayed page. The `pageProps` object contains the initial props that were preloaded by the data fetching methods. If no data fetching methods were used in that particular page, the `pageProps` object will be empty.

## 🚀 Exercise

Override the `App` component and pass a `title` prop to the `Component`.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+07+-+Override+the+App+component) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.