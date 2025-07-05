This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Routing

```
pages/
├── api/
│   └── hello.js           => API route: '/api/hello'
├── index.js               => Route: '/'
├── about.js               => Route: '/about'
├── blog/
│   ├── index.js           => Route: '/blog'
│   └── [slug].js          => Dynamic route: '/blog/748126', '/blog/navneet'
│── product/
    └── [category]/
        └── [id].js        => Dynamic route: '/product/electronics/42', '/product/fashion/345'
```

- Routing only works inside the pages/ directory.

- Files outside of pages/ (e.g., components/, lib/) are not part of the routing system.

- Dynamic routes can be nested and combined as needed.

## [SWR](https://swr.vercel.app/docs/getting-started) - React Hooks for Data Fetching

- The name **SWR** is derived from `stale-while-revalidate`, a HTTP cache invalidation strategy popularized by HTTP RFC 5861(opens in a new tab). SWR is a strategy to first return the data from cache (stale), then send the fetch request (revalidate), and finally come with the up-to-date data.

- **Documentation** :
  [SWR Docs](https://swr.vercel.app/docs/getting-started)

- **Installation**:

  ```bash
  npm i swr

  pnpm/yarn add swr
  ```

- **Usage**

  ```js
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // If you want to use GraphQL API or libs like Axios, you can create your own fetcher function. Check here for more examples.
  ```

  Then you can import useSWR and start using it inside any function components:

  ```js
  import useSWR from "swr";

  function Profile({ userId }) {
    const { data, error, isLoading } = useSWR(`/api/user/${userId}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;

    // render data
    return <div>hello {data.name}!</div>;
  }
  ```

  > With SWR, components will get a stream of data updates constantly and automatically. And the UI will be always fast and reactive.
