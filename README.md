Uni Notes — A Modern Notes & Study Platform Built with Next.js

Uni Notes is a fast, minimal, and structured web platform designed to help students access university notes, syllabus, and previous year papers with a clean and distraction-free reading experience.
The platform uses MDX for content, a Notion-style interface, secure reading features, and includes an admin panel for managing academic content.

Features
Core Features

MDX-based notes system

Syllabus and previous year paper viewer

Notion-style split-screen reader layout

Fullscreen reading mode

Search functionality using Fuse.js

Theme system (light, dark, system)

Student Productivity Tools

Bookmarks

Reading progress tracking

To-Do list

Profile section (optional)

Optional subject-based study chatbot

Content Protection

Disable right-click

Disable text selection

Disable copy events

Watermark overlay

Optional pseudo-element text rendering

Admin Panel

Course management

Semester management

Subject management

Unit management (MDX file upload)

Syllabus manager

PYQ manager

File uploads (Cloudinary or local)

User management

Tech Stack
Frontend

Next.js 15 (App Router)

React 19

TypeScript

Tailwind CSS

shadcn/ui

Framer Motion

Lenis (smooth scrolling)

React Hook Form + Zod

Backend

Next.js API Routes

PostgreSQL (Supabase recommended)

NextAuth / Clerk for authentication

Cloudinary for storage

Content & Search

MDX rendering

Table of contents generator

Fuse.js for client-side search

Installation
1. Clone the repository
git clone https://github.com/NishulDhakar/Uni-notes
mv Uni-notes uni-notes
cd uni-notes

2. Install dependencies
npm install
# or
bun install

3. Environment variables

Create a .env.local file and add the following:

DATABASE_URL=""

# Authentication
NEXTAUTH_SECRET=""
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary
CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""

# Optional
OPENAI_API_KEY=""

4. Start the development server
npm run dev

Folder Structure
src/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Public pages
│   ├── (user)/                   # User dashboard routes
│   ├── (admin)/                  # Admin dashboard routes
│   ├── api/                      # API endpoints
│   └── global.css                # Global styles
│
├── components/                   # UI components
│   ├── navigation/               # Sidebar, navbar
│   ├── reader/                   # MDX reader components
│   ├── admin/                    # Admin components
│   └── ui/                       # shadcn/ui components
│
├── content/                      # MDX notes (Course → Sem → Subject → Unit)
│
├── hooks/                        # Custom hooks
│
├── lib/                          # Utility libraries
│   ├── auth/                     # Authentication utilities
│   ├── db/                       # Database utilities
│   ├── search/                   # Fuzzy search logic
│   ├── mdx/                      # MDX helpers
│   └── security/                 # Content protection utilities
│
└── types/                        # TypeScript type definitions

Naming Conventions

Components use PascalCase

Hooks start with use

Utility files use kebab-case

API routes follow Next.js conventions (route.ts)

Constants use UPPER_SNAKE_CASE

MDX files follow unit-name.mdx style

Contribution Guidelines

Fork the repository

Create a new branch for your feature

Follow the established folder structure

Use TypeScript consistently

Add proper loading and error states

Write meaningful commit messages

Submit a pull request with a clear description

License

This project is licensed under the MIT License.
