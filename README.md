# Wild Wanderlust Hub

A modern wilderness travel and safari website built with cutting-edge web technologies. Discover breathtaking destinations, plan your wilderness adventures, and connect with nature through our immersive digital experience.

## Features

- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Modern UI Components**: Built with shadcn/ui for consistent, accessible components
- **Fast Performance**: Powered by Vite for lightning-fast development and builds
- **Type Safety**: Full TypeScript implementation for robust, maintainable code
- **Interactive Elements**: Smooth animations and engaging user interactions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FrankEWallace/wilderness.git
cd wilderness
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (buttons, cards, etc.)
│   ├── About.tsx       # About section component
│   ├── ContactForm.tsx # Contact form component
│   ├── Destinations.tsx# Destination showcase
│   ├── Experience.tsx  # Experience section
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── assets/             # Static assets (images, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## Technology Stack

This project leverages modern web technologies for optimal performance and developer experience:

### Core Framework
- **React 18** - Latest React with concurrent features and improved performance
- **TypeScript** - Type-safe JavaScript for better code quality and developer experience
- **Vite** - Ultra-fast build tool and development server with HMR

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible React components built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful, customizable icon library

### State Management & Forms
- **TanStack Query (React Query)** - Powerful server state management
- **React Hook Form** - Performant form handling with minimal re-renders
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **SWC** - Super-fast JavaScript/TypeScript compiler
- **PostCSS** - CSS processing with Autoprefixer

### Additional Libraries
- **React Router DOM** - Client-side routing
- **Date-fns** - Modern date utility library
- **Embla Carousel** - Lightweight carousel library
- **Recharts** - Composable charting library

## Why This Tech Stack?

1. **Performance**: Vite + SWC provide lightning-fast development and build times
2. **Developer Experience**: TypeScript + ESLint ensure code quality and catch errors early
3. **Scalability**: Component-based architecture with proper type safety
4. **Accessibility**: Radix UI components are built with accessibility as a priority
5. **Modern Standards**: Uses latest web standards and best practices

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployments
- **AWS S3 + CloudFront**: For enterprise-level hosting

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).
