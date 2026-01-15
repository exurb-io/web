# Exurb Web

Marketing website for Exurb network monitoring platform.

## Tech Stack

- **Next.js 14** - React framework with static export
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling with custom Tech Noir palette
- **Vercel** - Hosting and deployment

## Design System

This site uses the **Tech Noir** color palette:

- **Exurb Neon** (`#2CFF05`) - Primary brand color
- **Void Black** (`#050505`) - Main background
- **Deep Carbon** (`#121212`) - Surface/cards
- **Glitch Red** (`#FF003C`) - Errors/alerts
- **Terminal Grey** (`#71717A`) - Muted text

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

This site is configured for Vercel with static export:

1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js configuration
3. Deploy with default settings

### Custom Domain

To connect your domain in Vercel:

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

## Directory Structure

```
web/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── public/              # Static assets
├── tailwind.config.ts   # Tailwind configuration
└── next.config.js       # Next.js configuration
```

## License

Same as parent Exurb project.
