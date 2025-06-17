# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 15, showcasing a web developer's work and profile. The site features a modern design with Tailwind CSS v4, TypeScript, and React 19.

## Development Commands

```bash
# Development
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build for production  
npm run start        # Start production server
npm run lint         # Run ESLint with Next.js and TypeScript rules
```

## Architecture

### Framework Stack
- **Next.js 15** with App Router architecture
- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **ESLint** with Next.js core-web-vitals and TypeScript extensions

### Project Structure
- Uses App Router with `src/app/` directory
- Components are organized in `src/components/`
- Static assets in `public/images/`
- Path alias `@/*` maps to `./src/*`

### Component Architecture
- Functional components with TypeScript interfaces
- Arrow function exports for components (Header, Footer, WorkCard)
- Props are properly typed with interfaces
- Uses Next.js Image component for optimized images
- Link component for internal navigation with smooth scrolling

### Design System
- Japanese language support (`lang="ja"`)
- Dark theme with slate color palette
- Gradient backgrounds with backdrop blur effects
- Responsive design with mobile-first approach
- Fixed header with transparent backdrop
- Glass morphism effects using `bg-white/10` and `backdrop-blur-md`

### Content Management
- **microCMS Integration**: Work portfolio data fetched from microCMS headless CMS
- Work type interface defined in `src/lib/microcms.ts` with id, title, description, image, technologies, url, github, and timestamps
- Static metadata with OpenGraph support for social sharing
- Profile information and images stored in public directory
- Server-side rendering for works data using async page component

### Styling Patterns
- Tailwind utility classes with responsive variants
- Custom gradient backgrounds with CSS animations (`.animated-gradient` class)
- Semi-transparent overlays and backdrop filters
- Consistent spacing with container and padding utilities

## Environment Configuration

Required environment variables in `.env.local`:
```bash
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

## Dependencies

### Core Dependencies
- **microcms-js-sdk**: Headless CMS integration for portfolio content
- **Next.js 15**: App Router with React 19 and TypeScript
- **Tailwind CSS v4**: Utility-first CSS framework with PostCSS integration

### Key Features
- Japanese language support with smooth scroll navigation
- Responsive layout with fixed header (mobile) and sidebar (desktop)
- Dynamic work portfolio fetched from microCMS with TypeScript interfaces
- Optimized images using Next.js Image component