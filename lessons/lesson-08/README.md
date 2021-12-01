# Lesson 08: Use UI frameworks like Chakra UI

## Background
In [Lesson 06](../lesson-06/README.md) we learned how to create and use CSS files. But, most of the developers use UI frameworks to make their life easier. Using a UI framework like Chakra UI in combination with Next.js will supercharge your feature development and make the styling of your app even easier.

Frameworks like [Chakra UI](https://chakra-ui.com) utilize the React Context API to configure your web app's theme and ensure consistent styles. As we mentioned in the [Lesson 05](../lesson-05/README.md), we can override the `App` component to persist layout between page changes and inject additional data into pages. That's where we can add the `ChakraProvider`. Chakra UI also comes with a `ColorModeScript` specifically built for Next.js that we need to put in our custom `Document`, which we learned how to override in [Lesson 07](../lesson-07/README.md).

## 🚀 Exercise
In this lesson, we're going to configure Chakra UI in our project.