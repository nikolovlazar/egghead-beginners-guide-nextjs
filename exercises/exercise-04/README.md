# Exercise 04: Serve static assets

## Background

Aside from `pages`, there is another "specialized" folder called `public`. Next.js serves everything in the `public` folder statically, starting from the base URL `/`. If we had an image `public/lazar.png` we can view it on `http://localhost:3000/lazar.png`, or we can reference it in our code:

```typescript
const Avatar = () => {
  return <img src="/lazar.png" alt="Lazar Nikolov" />
}

export default Avatar
```

The `public` folder is also useful for the `robots.txt`, `favicon.ico`, Google Site Verification, and any other static files, including HTML files.

## 🚀 Exercise

Add the `"lazar.png"` image (which is at the root of this project) to the Home page.