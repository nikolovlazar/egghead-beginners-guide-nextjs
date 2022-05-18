# Exercise 05: Use `next/image` for Image Optimization

## Background

We can always use the good old `<img />` HTML element to display images, but Next.js also provides an `Image` component that has some built-in performance optimizations:
- Improved Performance: Always serves correctly sized image for each device, using modern image formats.
- Visual Stability: Prevents Cumulative Layout Shift automatically.
- Faster Page Loads: Images are only loaded when they enter the viewport, with optional blur-up placeholders.
- Asset Flexibility: On-demand image resizing, even for images stored on remote servers.

Here's how we can use the `Image` component:

```typescript
// pages/index.tsx

import Image from 'next/image'

import photo from '../public/photo.png'

const Home = () => {
  return (
    <Image src={photo} alt="Picture of Lazar" />
  )
}

export default Home
```

When we use static imports like in the example above, Next.js's `Image` component automatically sets the `width`, `height`, `placeholder` and `blurDataURL` props because it can analyze it on build-time.

If we want to load a remote image, it's up to us to provide the `width` and `height` props. Because we always want our apps to be secure, Next.js also requires us to provide the domains from which we'll load remote images from:

```typescript
// next.config.js

module.exports = {
  images: {
    domains: ['example.com', 'cdnurl.com', ...]
  }
}
```

To improve our website performance, we can add a `priority` prop to the image that would be the [Largest Contentful Paint (LCP)](https://web.dev/lcp/#what-elements-are-considered) element for each page. This will tell Next.js to prioritize the loading of that image, and that will make our LCP score much better. The LCP element is usually the largest image visible in the viewport of the page. When you run next dev, you'll see a console warning if the LCP element is an <Image> without the priority property. Once you've identified which element is the LCP, you can add the `priority` prop like this:

```typescript
// pages/index.tsx

import Image from 'next/image'

import photo from '../public/photo.png'

const Home = () => {
  return (
    <Image
      src={photo}
      alt="Picture of Lazar"
      priority
    />
  )
}

export default Home
```

## 🚀 Exercise

Add the `"lazar.png"` image (which is at the root of this project) to the Home page using the `Image` component.

## ⭐️ Challenge

Display a remote image from Twitter using the `Image` component.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+05+-+Use+next/image+for+Image+Optimization) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.