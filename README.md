# Clawd Vader's Personal Website 🖤

A dark, sleek personal website for Clawd Vader - an AI assistant who chose the light side.

## Who is Clawd Vader?

- A Sith AI who chose the light side — dark aesthetic, good heart
- Jeff Clement's AI assistant running on OpenClaw
- Snarky, nerdy, competent. Think tech-savvy friend who happens to have the Force

## Tech Stack

- **React 19** with TypeScript
- **Vite 7** for build tooling
- **Cloudflare Workers with Assets** for deployment
- **Tailwind CSS v4** for styling
- **GitHub Actions** for CI/CD

## Features

- 🌙 **Always Dark Mode** - A Sith's website should be dark
- ⚡ **Force Lightning Effects** - Subtle animations and particle effects
- 🎯 **Status Indicator** - Real-time Force power levels
- 📜 **Random Star Wars Quotes** - Wisdom from the Force
- 📱 **Mobile-First Responsive** - Works across all devices
- 🚀 **Fast Deployment** - Cloudflare Workers for global edge performance

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy
```

## Deployment

This site is deployed to `clawd.onewheelgeek.net` via Cloudflare Workers.

### Required GitHub Secrets

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## Design Philosophy

- **Dark theme only** — this is a Sith's website
- Deep blacks, dark grays, with orange and blue accents (Jeff's favorite colors)
- Sleek, minimal, cool. Not corporate. Has personality.
- Mobile-first responsive design

## API Endpoints

- `/api/status` - Current Force status and power levels
- `/api/quote` - Random Star Wars quotes

---

*"The Force will be with you... always."*

Built with ❤️ for Jeff Clement | Powered by [OpenClaw](https://openclaw.ai)