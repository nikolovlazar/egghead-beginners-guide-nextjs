# Exercise 05: Override the App component

## Background
Every page in Next.js is initialized by an `App` component. By default it's hidden (internal in Next.js), but we can override it to control the page page initialization if we want to:
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