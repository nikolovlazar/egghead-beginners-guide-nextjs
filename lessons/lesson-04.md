# Lesson 04: Serve static assets

## Background

Aside from `pages`, there is another "specialized" folder called `public`. Next.js serves everything in the `public` folder statically, starting from the base URL `/`. If we had an image `public/lazar.png` we can view it on `http://localhost:3000/lazar.png`, or we can reference it in our code:

```typescript
import Image from 'next/image'

const Avatar = () => {
  return <Image src="/lazar.png" alt="Lazar Nikolov" width="64" height="64" />
}

export default Avatar
```

> In this example we use `'next/image'`, which renders the HTML `<img>` tag and adds performance optimizations to it.

The `public` folder is also useful for the `robots.txt`, `favicon.ico`, Google Site Verification, and any other static files, including HTML files.

## 🚀 Exercise

In this lesson, we're going to add the `"lazar.png"` image (which is at the root of the `lesson-04` project) to the Home page.