# Exercise 05: Provide page-specific metadata

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

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+05+-+Provide+page-specific+metadata) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.