# Exercise 06: Provide page-specific metadata

## Background
Something that every website has in common is a metadata, which consists of a title, description, style links, scripts and so on. In Next.js, we can use the `Head` component to provide metadata for each page specifically:

```typescript
// pages/index.tsx

import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <h1>Homepage</h1>
      </div>
    </>
  )
}

export default Home
```

The content in the `Head` component can be composed of local hardcoded data, and also obtained from an API or CMS. In order to avoid duplicates, we can use the `key` prop, which will make sure that the tag is going to be rendered only once:

```typescript
// pages/index.tsx

import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="og:title" content="My awesome course" key="title" />
      </Head>
      <Head>
        <meta name="og:title" content="My Next.js course" key="title" /> // <--- this tag will be rendered
      </Head>
      <div>
        <h1>Homepage</h1>
      </div>
    </>
  )
}

export default Home
```

In this case, only the second ("My Next.js course") tag is going to be rendered.

> The contents of the `Head` component get cleared upon unmounting the component, so make sure that each page completely defines what it needs without making assumptions about what other pages added.

The `title`, `meta`, or any other elements need to be direct children of the `Head` component, or wrapped into maximum one level of `<React.Fragment>`, otherwise the tags won't be correctly picked up on client-side navigations.

## 🚀 Exercise

Add a title and description using the `Head` component in our homepage.

## 🚩 Checkpoint
This exercise marks the second checkpoint at which we'll go into breakout rooms to do the following exercises:
- [Exercise 04: Serve static assets](../exercise-04--serve-static-assets)
- [Exercise 05: Use next/image for image optimization](../exercise-05--use-next-image-for-image-optimization)
- [Exercise 06: Provide page-specific metadata](../exercise-06--provide-page-specific-metadata)

Start with the first exercise, and work your way through the last one. If you're stuck, do not hesitate to ask. As soon as you're done you can fill out either the [Post-Breakout Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSda0BFV57OWbSkshNC_jZ809HEBOuW_MzLEz1Bq4PVKtI7R9w/viewform?usp=pp_url&entry.651170566=Group+2:+Static+Assets,+Next+Image,+Page+Metadata), or the feedback forms for each individual exercise. I would appreciate your feedback a lot.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+06+-+Provide+page-specific+metadata) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.