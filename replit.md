# GNPC Corporate Website - Gambia National Petroleum Corporation

## Overview

A modern, multi-page corporate website for the Gambia National Petroleum Corporation (GNPC), The Gambia's national oil company. The application presents GNPC's services, products, exploration opportunities, and retail network through a professional corporate design with environmental focus. Built as a full-stack web application with React frontend and Express backend, featuring form submissions for inquiries and contact messages.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Tooling**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for client-side routing (lightweight React Router alternative)
- **TanStack Query v5** for server state management and API data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- **class-variance-authority** (CVA) for component variant management
- Custom theme system using CSS variables for colors and spacing

**Design System**
- Color palette centered on green tones (#166534 dark, #15803d medium, #22c55e light) with yellow accent (#eab308)
- Typography using Inter/system font stack
- Spacing system based on Tailwind's 4px grid
- Corporate professional aesthetic inspired by energy sector leaders

**Form Handling**
- **React Hook Form** for form state management
- **Zod** for runtime validation
- **@hookform/resolvers** for Zod integration with React Hook Form

**Page Structure**
Multi-page application with the following routes:
- Home (`/`) - Hero section, statistics, services overview
- About (`/about`) - Company history, values, milestones
- Services (`/services`) - Exploration, partnerships, licensing, capacity building
- Products (`/products`) - Fuel products and lubricants
- Stations (`/stations`) - Service station locations and details
- Exploration (`/exploration`) - Investment opportunities with inquiry form
- News (`/news`) - Company news and announcements
- Contact (`/contact`) - Contact form and information

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Dual-mode operation: development (with Vite middleware) and production (static file serving)
- Custom logging middleware for request tracking

**API Design**
RESTful API endpoints:
- `POST /api/inquiries` - Submit exploration/partnership inquiry
- `GET /api/inquiries` - Retrieve all inquiries
- `POST /api/contact` - Submit contact message
- `GET /api/contact` - Retrieve all contact messages

**Validation Layer**
- Zod schemas shared between client and server (`shared/schema.ts`)
- Server-side validation with detailed error messages using `zod-validation-error`

**Development vs Production**
- Development: Vite dev server integrated as Express middleware with HMR
- Production: Express serves pre-built static files from `dist/public`

### Data Storage Solutions

**Current Implementation**
- **In-memory storage** using Map-based storage class (`MemStorage`)
- UUID generation for record IDs using Node.js `crypto.randomUUID()`
- Data persistence only during runtime (resets on server restart)

**Database Schema (Prepared but Not Connected)**
- **Drizzle ORM** configured for PostgreSQL
- Schema defined in `shared/schema.ts`:
  - `inquiries` table: company inquiries for exploration opportunities
  - `contact_messages` table: general contact form submissions
- **Neon Database** serverless PostgreSQL (@neondatabase/serverless)
- Migration system ready via `drizzle-kit`

**Schema Structure**
```typescript
inquiries {
  id: UUID (primary key)
  companyName: text
  email: text
  areaOfInterest: text
  message: text
  createdAt: timestamp
}

contact_messages {
  id: UUID (primary key)
  name: text
  email: text
  phone: text (optional)
  subject: text
  message: text
  createdAt: timestamp
}
```

**Migration Strategy**
The application is designed to easily switch from in-memory to PostgreSQL:
1. Set `DATABASE_URL` environment variable
2. Run `npm run db:push` to sync schema
3. Replace `MemStorage` with Drizzle-based storage implementation

### External Dependencies

**UI Component Libraries**
- Multiple Radix UI primitives for accessible components (accordion, dialog, dropdown, popover, select, tabs, toast, tooltip, etc.)
- `lucide-react` for icon system
- `cmdk` for command menu functionality
- `embla-carousel-react` for carousel components
- `date-fns` for date formatting
- `vaul` for drawer components

**Development Tools**
- **Replit-specific plugins**: runtime error modal, cartographer, dev banner (development only)
- `esbuild` for production server bundling
- `tsx` for TypeScript execution in development

**Database & ORM**
- `drizzle-orm` and `drizzle-kit` (configured but not actively used)
- `@neondatabase/serverless` for PostgreSQL connection
- `connect-pg-simple` for PostgreSQL session store (installed but unused)

**Build & Development**
- `autoprefixer` and `postcss` for CSS processing
- Tailwind CSS with custom configuration
- TypeScript with strict mode enabled

**Rationale for Current Architecture**
The in-memory storage approach allows rapid development and testing without database setup, while the complete Drizzle schema and configuration ensures a straightforward migration path to persistent PostgreSQL storage when needed. This dual-ready approach balances development speed with production readiness.