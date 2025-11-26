# Uni Notes — A Modern Notes & Study Platform

A fast, minimal, and structured web platform designed to help students access university notes, syllabus, and previous year papers with a clean and distraction-free reading experience. Built with Next.js 15, the platform uses MDX for content delivery, features a Notion-style interface, secure reading capabilities, and includes a comprehensive admin panel for managing academic content.

<img width="2395" height="1150" alt="Gemini_Generated_Image_ummq80ummq80ummq 1" src="https://github.com/user-attachments/assets/29c782b9-0e86-48c6-b11b-e10ff829c92c" />

## Features

### Core Features

- **MDX-based notes system** for rich content formatting
- **Syllabus and previous year paper viewer**
- **Notion-style split-screen reader layout** for enhanced navigation
- **Fullscreen reading mode** for distraction-free study sessions
- **Advanced search functionality** powered by Fuse.js
- **Flexible theme system** supporting light, dark, and system preferences

### Student Productivity Tools

- **Bookmarks** to save important notes
- **Reading progress tracking** to monitor study advancement
- **Integrated To-Do list** for task management
- **User profile section** for personalized experience
- **Optional subject-based study chatbot** for interactive learning

### Content Protection

- Right-click prevention
- Text selection blocking
- Copy event interception
- Watermark overlay system
- Optional pseudo-element text rendering for enhanced security

### Admin Panel

- Course management interface
- Semester organization tools
- Subject administration
- Unit management with MDX file upload
- Syllabus manager
- Previous year question paper (PYQ) manager
- File upload support via Cloudinary or local storage
- User management system

## Tech Stack

### Frontend

- **Next.js 15** with App Router
- **React 19**
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Framer Motion** for animations
- **Lenis** for smooth scrolling
- **React Hook Form** with **Zod** validation

### Backend

- **Next.js API Routes** for server-side logic
- **PostgreSQL** database (Supabase recommended)
- **NextAuth** or **Clerk** for authentication
- **Cloudinary** for media storage

### Content & Search

- **MDX** for content rendering
- Automatic table of contents generation
- **Fuse.js** for client-side fuzzy search

## Installation

### Prerequisites

- Node.js 18+ or Bun
- PostgreSQL database
- Cloudinary account (for media uploads)

### Setup Instructions

**1. Clone the repository**
```bash
git clone https://github.com/NishulDhakar/Uni-notes
cd Uni-notes
```

**2. Install dependencies**
```bash
npm install
# or
bun install
```

**3. Configure environment variables**

Create a `.env.local` file in the root directory:
```env
# Database
DATABASE_URL="your_postgresql_connection_string"

# Authentication
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"

# Cloudinary
CLOUD_NAME="your_cloudinary_cloud_name"
CLOUDINARY_API_KEY="your_cloudinary_api_key"
CLOUDINARY_API_SECRET="your_cloudinary_api_secret"

# Optional: AI Features
OPENAI_API_KEY="your_openai_api_key"
```

**4. Run database migrations**
```bash
npm run db:migrate
```

**5. Start the development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Structure
```
src/
├── app/                          # Next.js App Router
│   ├── (site)/                   # Public-facing pages
│   ├── (user)/                   # User dashboard routes
│   ├── (admin)/                  # Admin dashboard routes
│   ├── api/                      # API endpoints
│   └── global.css                # Global styles
│
├── components/                   # React components
│   ├── navigation/               # Sidebar, navbar components
│   ├── reader/                   # MDX reader components
│   ├── admin/                    # Admin panel components
│   └── ui/                       # shadcn/ui components
│
├── content/                      # MDX notes organized hierarchically
│   └── [course]/[semester]/[subject]/[unit].mdx
│
├── hooks/                        # Custom React hooks
│
├── lib/                          # Utility libraries
│   ├── auth/                     # Authentication utilities
│   ├── db/                       # Database utilities
│   ├── search/                   # Search implementation
│   ├── mdx/                      # MDX processing helpers
│   └── security/                 # Content protection utilities
│
└── types/                        # TypeScript type definitions
```

## Code Conventions

### Naming Standards

- **Components**: PascalCase (e.g., `NoteReader.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useBookmarks.ts`)
- **Utility files**: kebab-case (e.g., `format-date.ts`)
- **API routes**: Next.js convention with `route.ts`
- **Constants**: UPPER_SNAKE_CASE (e.g., `MAX_FILE_SIZE`)
- **MDX files**: kebab-case (e.g., `introduction-to-algorithms.mdx`)

### Best Practices

- Write TypeScript with strict type checking enabled
- Use React Server Components by default
- Implement proper error boundaries
- Add loading states for async operations
- Follow the established folder structure
- Document complex logic with comments
- Write semantic and accessible HTML

## Contributing

We welcome contributions from the community. Please follow these guidelines:

1. **Fork the repository** and create a new branch from `main`
2. **Follow the established conventions** outlined in this document
3. **Use TypeScript** consistently throughout your changes
4. **Add proper error handling** and loading states
5. **Test your changes** thoroughly before submitting
6. **Write clear commit messages** following conventional commits format
7. **Submit a pull request** with a detailed description of your changes

### Commit Message Format
```
type(scope): brief description

[optional body]

[optional footer]
```

**Types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

For issues, questions, or feature requests, please open an issue on the [GitHub repository](https://github.com/NishulDhakar/Uni-notes/issues).

## Acknowledgments

Built with modern web technologies and best practices to provide students with a powerful, secure, and efficient study platform.
