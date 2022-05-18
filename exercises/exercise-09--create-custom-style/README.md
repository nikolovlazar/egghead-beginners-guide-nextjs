# Exercise 09: Create custom style

## Background

In Next.js, there are several ways to achieve custom styles:
- [Adding a Global Stylesheet](#adding-a-global-stylesheet)
- [Component-level CSS](#component-level-css)
- [CSS-in-JS](#css-in-js)

### Adding a Global Stylesheet
To add a global stylesheet, we need to import it in the `pages/_app.tsx` file. If we haven't overriden the `App` yet, we should do that first.

Let's say we have the following file `styles.css` at the root of the project:

```css
body {
  font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
    'Arial', sans-serif;
  padding: 20px 20px 60px;
  max-width: 680px;
  margin: 0 auto;
}
```

To use it, we need to simply import it in our `_app.tsx` file:

```typescript
import type { AppProps } from 'next/app'

import '../styles.css'

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App
```

Since we're importing them in our `_app.tsx` file, these styles will be applied to every page.

> Since Next.js 9.5.4, we can also import styles from `node_modules`, for example: `import 'bootstrap/dist/css/bootstrap.css'` will import Bootstrap and it will work just fine.

### Component-level CSS

Another way of achieving custom styles is using [CSS Modules](https://github.com/css-modules/css-modules), which Next.js has support for.

Let's say we want to make a reusable Button component. First, we're going to create the CSS module `src/components/button/button.module.css`:

```css
.error {
  color: white;
  background-color: red;
}
```
Then, we're going to create the component itself `src/components/button/button.tsx`:

```typescript
import styles from './button.module.css'

const Button = () => {
  return (
    <button
      type="button"
      className={styles.error}
    >
      Delete
    </button>
  )
}

export default Button
```

### CSS-in-JS

Next.js also comes with a built-in CSS-in-JS support. The simplest way to do CSS-in-JS is inline styles:

```typescript
const Button = () => {
  return (
    <button
      type="button"
      style={{ color: 'white', backgroundColor: 'red' }}
    >
      Delete
    </button>
  )
}

export default Button
```

## 🚀 Exercise
Try all three methods:
- Create a global stylesheet that defines the container layout
- Create a flexbox `<div>` using CSS-in-JS
- Create a "Log in" `Button` component that uses CSS Modules and put it in the flexbox

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+09+-+Create+custom+style) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.