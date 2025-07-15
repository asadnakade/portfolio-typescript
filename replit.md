# Portfolio Website - Asad Nakade

## Overview

This is a modern, responsive portfolio website built for Asad Nakade, a Software Engineer with 2+ years of experience in full-stack development. The application showcases professional experience, skills, projects, and provides a contact form for potential clients or employers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Custom CSS animations and React hooks for scroll-based animations

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API design
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Storage**: connect-pg-simple for PostgreSQL-based sessions

### Project Structure
```
├── client/               # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Route components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utility functions and configurations
├── server/               # Backend Express application
├── shared/               # Shared code between client and server
│   └── schema.ts         # Database schema and validation
└── migrations/           # Database migration files
```

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure (currently unused)
- **Contacts Table**: Stores contact form submissions with name, email, subject, message, and timestamp

### Contact System
- Form validation using Zod schemas
- Real-time form validation and error handling
- Toast notifications for user feedback
- Server-side validation and error responses

### UI Components
- **Hero Section**: Animated typing effect, floating profile image, gradient backgrounds
- **About Section**: Animated counters, skill progress bars, intersection observer animations
- **Experience Section**: Timeline-style work experience display
- **Projects Section**: Project showcase with modal details and technology badges
- **Skills Section**: Filterable skill cards with proficiency indicators
- **Education Section**: Academic background and certifications
- **Contact Section**: Validated contact form with real-time feedback

### Animation System
- Custom hooks for scroll-based animations (`useIntersectionObserver`)
- Typing animation hook for dynamic text display
- CSS animations for floating elements, fade-ins, and parallax effects
- Particle background system for visual enhancement

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form
   - Client-side validation using Zod schema
   - Form data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Contact Data Retrieval**:
   - Admin can access `/api/contacts` to view all submissions
   - Data fetched from PostgreSQL via Drizzle ORM

3. **Static Content**:
   - Portfolio content is statically defined in components
   - No database queries needed for displaying portfolio information

## External Dependencies

### Core Framework Dependencies
- **React 18**: Component-based UI framework
- **Vite**: Build tool and development server
- **Express**: Backend web framework
- **TypeScript**: Type safety across the stack

### Database & ORM
- **Drizzle ORM**: Type-safe database toolkit
- **@neondatabase/serverless**: Neon database connection
- **connect-pg-simple**: PostgreSQL session store

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Icon library

### Form & Validation
- **Zod**: Schema validation library
- **React Hook Form**: Form state management
- **@hookform/resolvers**: Zod integration for forms

### Development & Production
- **ESBuild**: JavaScript bundler for production
- **PostCSS**: CSS processing
- **TSX**: TypeScript execution for development

## Deployment Strategy

### Development
- **Server**: TSX executes TypeScript directly for hot reloading
- **Client**: Vite dev server with HMR (Hot Module Replacement)
- **Database**: Drizzle Kit for schema management and migrations

### Production Build
- **Client**: Vite builds optimized static assets to `dist/public`
- **Server**: ESBuild bundles server code to `dist/index.js`
- **Database**: Migrations applied via `drizzle-kit push`

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Neon Database provides serverless PostgreSQL hosting
- The application is configured for deployment on platforms like Replit, Vercel, or similar

### Key Architectural Decisions

1. **Monorepo Structure**: Keeps client, server, and shared code in one repository for easier development and deployment
2. **Drizzle ORM**: Chosen for type safety and PostgreSQL compatibility
3. **In-Memory Fallback**: MemStorage class provides development fallback when database is unavailable
4. **Shared Schema**: Zod schemas in shared directory ensure consistent validation between client and server
5. **Component-Based Architecture**: Modular React components for maintainability and reusability