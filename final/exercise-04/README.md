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

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+04+-+Serve+static+assets) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.