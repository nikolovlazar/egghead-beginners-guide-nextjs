# Exercise 07: Override the Document

## Background
Just like `_app.tsx`, we can also override the `_document.tsx` file. We can use a custom `Document` to augment our application's `<html>` and `<body>` tags, like setting the `lang` property of the `<html>` tag, adding third-party scripts, linking custom fonts, add analytics scripts etc...

To override the default `Document`, we need to create a file `pages/_document.tsx`:

```typescript
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
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
}

export default MyDocument
```
> 💡 The `<Html>`, `<Head />`, `<Main />` and `<NextScript />` are required for the page to be properly rendered!

Note that the `Document` is only rendered in the server, so event handlers like `onClick` will not work!

## 🚀 Exercise
Override the `Document`.