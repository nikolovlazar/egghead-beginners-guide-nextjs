# Exercise 14: Create and use API Routes

## Background

Since Next.js is built on top of Node.js, it also allows us to define our own API routes. The API routes are functions that are part of the server, but instead of rendering HTML, they're returning JSON data.

Any file inside `pages/api` is mapped to `/api/*` and it will be treated as an API endpoint instead of a page. These functions are server-side, and will not bundled with your client-side code. That means we can safely open DB connections, and use secret environment variables.

For new projects, we can build our entire API with API routes, but if we already have an existing API we don't need to forward our API calls through an API route. We could also use API calls if we want to mask our API or an external service (instead of `https://mycompany.com/secret-api-url`, we can send requests to `/api`).

To create an API handler, we need to create a file in `pages/api` and export a default async function:

```typescript
// pages/api/user.ts

import type { NextApiHandler } from 'next'

const handler: NextApiHandler = async (req, res) => {
  return res.status(200).json({ name: 'John Doe' })
}

export default handler
```

The function receives 2 arguments:
- `req`: An instance of http.IncomingMessage, plus some pre-built middlewares
- `res`: An instance of http.ServerResponse, plus some helper functions

The `req` contains the `method`, `body` and `query` properties that we can use to handle the request. Here's how we can handle different HTTP methods in our API:

```typescript
const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    // process the GET request
  }
  if (req.method === 'POST') {
    // process the POST request
  }
}
```

To get the data sent from the client, we can use the `body` property:

```typescript
const handler: NextApiHandler = async (req, res) => {
  const { body } = req;
  // body: { name: 'Lazar Nikolov', profession: 'Software Engineer' }

  if (req.method === 'POST') {
    // save data (body) in database
  }
}
```

> We can also use a dynamic route when building API handlers.

## 🚀 Exercise

Create a User Directory API that returns data for a given user. Use a dynamic route that contains the `userId`, and return the user with that ID. The user data is exported from `data/users.ts`.

## 🚩 Checkpoint
This exercise marks the fourth checkpoint at which we'll go into breakout rooms to do the following exercises:
- [Exercise 12: Use the Static Generation method](../exercise-12--use-the-static-generation-method)
- [Exercise 13: Use the Server-side Rendering method](../exercise-13--use-the-server-side-rendering-method)
- [Exercise 14: Create and use API Routes](../exercise-14--create-and-use-api-routes)

Start with the first exercise, and work your way through the last one. If you're stuck, do not hesitate to ask. As soon as you're done you can fill out either the [Post-Breakout Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLSda0BFV57OWbSkshNC_jZ809HEBOuW_MzLEz1Bq4PVKtI7R9w/viewform?usp=pp_url&entry.651170566=Group+4:+Static+Generation,+Server-Side+Rendering,+API+Routes), or the feedback forms for each individual exercise. I would appreciate your feedback a lot.

## 🍩 Exercise Feedback form

Writing down what you learn is key to your retention. Also, I want to make sure each exercise is effective at helping you learn the material. Please quickly fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLSeKPJV5UInaNFlZawN7vZdNyPngyinrkp7eoQO0vzwGzh2EtQ/viewform?usp=pp_url&entry.651170566=Exercise+14+-+Create+and+use+API+Routes) so you can elaborate on what you learned and give me feedback so I can improve it for future learners.