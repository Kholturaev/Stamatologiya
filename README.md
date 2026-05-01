# Dentist — Dental Clinic Landing Page

A modern, multilingual dental clinic landing page built with **Next.js 16**, **React 19**, **TypeScript**, and **Tailwind CSS 4**.

## Features

- Sections: Hero, Services, About, Gallery, Prices, Testimonials, Contact
- Appointment booking form with **Telegram bot** notification
- **Russian / Uzbek** language switcher
- **Dark / Light** theme toggle (persisted in localStorage)
- Fully responsive layout with sticky header and floating CTA buttons

## Tech Stack

| Tool         | Version |
| ------------ | ------- |
| Next.js      | 16      |
| React        | 19      |
| TypeScript   | 5       |
| Tailwind CSS | 4       |
| lucide-react | latest  |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file in the project root:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

- `TELEGRAM_BOT_TOKEN` — token from [@BotFather](https://t.me/BotFather)
- `TELEGRAM_CHAT_ID` — the chat or group ID where booking requests will be sent

> Without these variables the booking form will still render, but submissions will return a configuration error.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm start`     | Start production server  |
| `npm run lint`  | Run ESLint               |

## Project Structure

```
src/
  app/
    page.tsx              # Main page (assembles all sections)
    layout.tsx            # Root layout
    globals.css           # Global styles
    api/
      booking/route.ts    # POST endpoint — sends booking to Telegram
  components/
    Hero.tsx
    Services.tsx
    About.tsx
    Gallery.tsx
    Prices.tsx
    Testimonials.tsx
    Contact.tsx
    BookingForm.tsx       # Appointment booking modal
    Header.tsx
    FloatingButtons.tsx
    StickyBottomBar.tsx
    providers/
      SiteProvider.tsx    # Theme, locale, and booking modal state
  lib/
    translations.ts       # RU / UZ translation strings
```

## Deployment

The easiest way to deploy is [Vercel](https://vercel.com/new). Set the environment variables (`TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID`) in the Vercel project settings before deploying.

```bash
npm run build
npm start
```
