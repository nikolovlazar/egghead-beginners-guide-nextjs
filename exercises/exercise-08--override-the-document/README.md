# Exercise 08: Override the Document

## Background
Just like `_app.tsx`, we can also override the `_document.tsx` file. We can use a custom `Document` to augment our application's `<html>` and `<body>` tags, like setting the `lang` property of the `<html>` tag, adding third-party scripts, linking custom fonts, add analytics scripts etc...

To override the default `Document`, we need to create a file `pages/_document.tsx`:

```typescript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```
> 💡 The `<Html>`, `<Head />`, `<Main />` and `<NextScript />` are required for the page to be properly rendered!

Note that the `Document` is only rendered in the server, so event handlers like `onClick` will not work!

## 🚀 Exercise
Override the `Document`.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+08+-+Override+the+Document) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.