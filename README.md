# Union Survey

A survey tool for any worker cooperative.

## Features

- Able to create, manage and compute votes on a variety of topics
- Should be able to restrict email domains to only allow members to vote
- Should be able to restrict votes to only allow members to vote
- The voting process:
  - A survey is created and filled with options
  - A survey is sent to members
  - Members vote on the survey through a link sent via OTP email ink (magic link)
  - The results are computed and displayed (or not) to the user
  - Should be able to restrict voting during a certain time period
  - Restrict one vote per email
  - After voting time is over, the results are computed and displayed

## Development

- [] Describe each page in models
- [] Prototype each page layout
- [] Create API for each resource

### Pages

#### Surveys (index)

Home page of this system. It should display a list of surveys that are currently active, and historical surveys.

#### Survey (show)

Display the survey and offers to user a capability to vote and its results and voting is over.
If survey is active, it should display a OTP form to send a magic link to the user, when clicked should redirect to the vote page.
If surver is ended, it should display the results.

#### Vote

Display the survey, it's options and a form to vote. When submitted, it should redirect to the survey page with a status message.

### Prerequisites

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
