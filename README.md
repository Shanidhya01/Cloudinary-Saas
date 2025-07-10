# AI Cloudinary SaaS

A modern SaaS starter built with Next.js 14, Clerk authentication, Tailwind CSS (with DaisyUI), App Router, and Cloudinary integration for image and video upload, transformation, and sharing.

---

## ✨ Features

- **Next.js 14 App Router**: File-based routing, layouts, and server components.
- **Clerk Authentication**: Secure sign-in/sign-up flows with social providers.
- **Cloudinary Integration**: Upload, transform, and serve images/videos.
- **Video Upload & Gallery**: Upload videos, view gallery, download originals or compressed versions.
- **Social Share Image Generator**: Create and download images in social media formats.
- **Tailwind CSS & DaisyUI**: Modern, customizable UI.
- **Prisma ORM**: Type-safe database access.
- **API Routes**: RESTful endpoints for uploads and data.
- **Docker Compose**: Local database setup for development.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-cloudinary-saas.git
cd ai-cloudinary-saas
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=...
CLOUDINARY_API_KEY=...
CLOUDINARY_API_SECRET=...
DATABASE_URL=...
```

### 4. Set up the database

If using Docker for local development:

```bash
docker-compose up -d
```

Run Prisma migrations:

```bash
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
ai-cloudinary-saas/
├── app/                # Next.js app directory (routes, layouts, API)
├── components/         # Reusable React components
├── prisma/             # Prisma schema and migrations
├── DB/                 # Docker Compose and seed data
├── public/             # Static assets
├── types/              # TypeScript types
├── tailwind.config.ts  # Tailwind CSS config (with DaisyUI)
├── middleware.tsx      # Custom middleware (auth, route protection)
├── next.config.ts      # Next.js config
├── .env                # Environment variables
└── ...
```

---

## 🛠️ Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build for production
- `npm run start` – Start the production server
- `npx prisma studio` – Open Prisma Studio (DB GUI)

---

## 📦 Tech Stack

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Cloudinary](https://cloudinary.com/)
- [Prisma](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📝 License

MIT

---

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Clerk](https://clerk.com/)
- [Cloudinary](https://cloudinary.com/)
- [Prisma](https://www.prisma.io/)
- [DaisyUI](https://daisyui.com/)

---

> Built with ❤️ for modern