# Building-React-Applications-with-Different-Frameworks

# 1. Next.js Dynamic User Directory
Project Description

This project is a web application built using the App Router in Next.js.
It demonstrates dynamic routing, server-side data fetching, and integration with an external REST API.

The application allows users to visit dynamic routes such as:

/users/1
/users/2
/users/3

Each route fetches and displays user information from a public API.

Objectives

This project demonstrates understanding of:

- App Router structure in Next.js
- Dynamic route segments ([id])
- Async server components
- Data fetching using fetch()
- Error handling in dynamic routes
- Working with external APIs

## Project Structure
```bash
app/
│
├── page.js
│
└── users/
    └── [id]/
        └── page.js
```
# 2. Remix Application 

## How to Run the Application

This project was built using:

- React Router v7 (full-stack template)
- React
- Node.js

Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd your-remix-app
```
2. Install dependencies:
```bash
npm install
```
3. Start Development Server
Run:
```bash
npm run dev
```

Available Routes

- / → Homepage (Blog post list)
- /posts/first-post → Individual blog post
- /posts/second-post → Individual blog post

How Routing Works

Routes are defined in:
```bash
app/routes.ts
```
The dynamic blog route is registered as:
```
posts/:slug
```
Which loads:
```
app/routes/posts/$slug.tsx
```
