# Exercise 03: Create Dynamic Routes

## Background

We learned in the previous exercise that Next.js treats our files in the `pages/` directory as pages, and it automatically generates routes for us. But, what if we wanted to create a page with a dynamic route? You can add brackets around the page's name (`[pid].tsx`) to create a dynamic route.

Let's say we have a page in `pages/post/[pid].tsx`:

```typescript
import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return <p>Post: {pid}</p>
}

export default Post
```

Any route like `/post/1`, `/post/hello-world`, etc. will be matched by the `[pid].tsx` page. The dynamic parameter `pid` will be available to us as a query parameter through Next.js's router.

If we want to have a multi-segment dynamic route, we can wrap the folders' names with brackets too, for example `pages/post/[pid]/[comment].tsx`. The router's query will merge the two dynamic segments, so if we visited `/post/hello-world/love-it`, the `query` object will be:
```typescript
{ pid: "hello-world", comment: "love-it" }
```

## 🚀 Exercise

Create a genre page that will display the genre's name dynamically. Examples:
- `/rock`
- `/country`
- `/pop`

## ⭐️ Challenge

Make a new dynamic page that will display the artist's name and their music genre. Examples:
- `/rock/axl-rose` should display "axl-rose is a rock music artist!"
- `/country/chris-stapleton` should display "chris-stapleton is a country music artist!"
- `/pop/bruno-mars` should display "bruno-mars is a pop music artist!"

## 🚩 Checkpoint
This exercise marks the first checkpoint at which we'll go into breakout rooms to do the following exercises:
- [Exercise 01: Create a new Next.js TypeScript project](../exercise-01--create-a-new-next-js-type-script-project)
- [Exercise 02: Create and navigate between pages](../exercise-02--create-and-navigate-between-pages)
- [Exercise 03: Create Dynamic Routes](../exercise-03--create-dynamic-routes)

Start with the first exercise, and work your way through the last one. If you're stuck, do not hesitate to ask. As soon as you're done you can fill out either the [Post-Breakout Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSda0BFV57OWbSkshNC_jZ809HEBOuW_MzLEz1Bq4PVKtI7R9w/viewform?usp=pp_url&entry.651170566=Group+1:+New+Project,+Pages+%26+Navigation,+Dynamic+Routes), or the feedback forms for each individual exercise. I would appreciate your feedback a lot.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+03+-+Create+Dynamic+Routes) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.