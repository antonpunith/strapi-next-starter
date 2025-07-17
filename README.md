# Strapi + Next.js Modern Starter

A full-stack starter for modern websites, combining the power of [Strapi](https://strapi.io/) (backend CMS) and [Next.js](https://nextjs.org/) (frontend), all written in TypeScript. This project is designed for rapid development, best practices, and scalability.

## Features

- **Strapi** (latest): Headless CMS for content management
- **Next.js** (latest): App Router, SSR, SSG, and API routes
- **TypeScript**: End-to-end type safety
- **GraphQL & REST**: Flexible data fetching
- **Tailwind CSS**: Modern styling
- **Component-based**: Clean, reusable React components
- **SEO Ready**: Dynamic metadata and Open Graph support
- **Production Ready**: Easily deployable to Vercel, Netlify, or your own server

## Getting Started

### Prerequisites

- **Node.js v20.x** (required)
- **Yarn** or **npm** (latest recommended)

### Setup

#### 1. Clone the repo

```bash
git clone <your-repo-url>
cd strapi-next-starter
```

#### 2. Install dependencies (root, recommended)

```bash
yarn
# or
npm install
```

#### 3. Configure Environment

- Copy `.env.example` to `.env` in both `backend` and `frontend` folders and update values as needed.
- Make sure your database and Strapi API URLs are correct.

#### 4. Run the app (root, recommended)

```bash
yarn dev
# or
npm run dev
```

This will start both Strapi and Next.js in development mode.

#### Alternative: Run from each folder

You can also run the backend and frontend separately:

```bash
cd backend
npm run develop

# In another terminal
cd frontend
npm run dev
```

#### 5. Access your app

- Strapi Admin: [http://localhost:1337/admin](http://localhost:1337/admin)
- Next.js Frontend: [http://localhost:3000](http://localhost:3000)

## Compatibility & Notes

- **Node.js v20.x is required** for both backend and frontend.
- Strapi and Next.js are kept up-to-date with the latest stable releases.
- For image optimization, Next.js is configured to allow images from `localhost` (see `next.config.ts`).
- GraphQL is enabled in Strapi by default (see `backend/config/plugins.ts`).
- If you see errors related to image processing or `sharp`, use:
  ```bash
  yarn add sharp --ignore-platform
  ```

## Folder Structure

```
strapi-next-starter/
  backend/    # Strapi CMS
  frontend/   # Next.js app
```

## License

MIT

---

Built with ❤️ using Strapi, Next.js, and TypeScript.
