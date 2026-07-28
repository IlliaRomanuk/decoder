# VIN Decoder

A web application for decoding vehicle VIN codes using the public NHTSA vPIC API. Lets you decode a VIN, browse the history of recent lookups, and explore the list of variables (fields) supported by the API.

🔗 **Live demo:** https://IlliaRomanuk.github.io/decoder/

## Features

- 🔍 Decode a 17-character VIN via the official NHTSA vPIC API
- 🕓 History of the last 3 decoded VINs with one-click re-lookup
- 📋 Full list of API variables with descriptions
- 🌗 Light/dark theme toggle with the choice persisted between sessions
- ⚡ Request caching via TanStack Query — navigating between pages doesn't trigger unnecessary network requests
- ✅ Client-side VIN validation before sending a request
- 📱 Responsive layout

## Tech Stack

| Category | Technologies |
|---|---|
| Language | TypeScript |
| UI | React 19 |
| Routing | React Router (HashRouter) |
| Server state | TanStack Query (React Query), Axios |
| Build tool | Vite |
| Styling | CSS with CSS custom properties (light/dark theming) |
| Linting | ESLint + typescript-eslint |
| Deployment | GitHub Pages (gh-pages) |

## API

The app uses the public [NHTSA vPIC API](https://vpic.nhtsa.dot.gov/api/):

- `GET /vehicles/decodevin/{vin}?format=json` — decode a VIN
- `GET /vehicles/getvehiclevariablelist?format=json` — list of supported variables

No API key is required — the service is free and open.

## Project Structure

```
src/
├── assets/                  # static files (icons, etc.)
├── components/
│   ├── Header/               # top navigation and theme toggle
│   ├── Aside/                 # sidebar (input form + history)
│   ├── DecoderInput/          # VIN input and validation form
│   ├── DecoderHistory/        # list of recently decoded VINs
│   └── Results/                # decoded results table
├── hooks/
│   ├── useDecodeVIN.ts        # VIN decode mutation (React Query)
│   └── useTheme.ts            # light/dark theme management
├── pages/
│   ├── Home/                   # main page — form + results
│   ├── Variables/              # list of API variables
│   └── VariableDetails/        # details of a single variable
├── services/
│   └── api.ts                  # axios client and request functions for the NHTSA API
├── type/
│   ├── api.type.ts
│   ├── result.type.ts
│   └── variable.type.ts
├── App.tsx                     # application routes
├── Layout.tsx                   # shared layout (Header + Outlet)
└── main.tsx                     # entry point, providers (QueryClient, Router)
```

## Getting Started

```bash
git clone https://github.com/IlliaRomanuk/decoder.git
cd decoder
npm install
```

### Development
```bash
npm run dev
```
The app will be available at `http://localhost:5173`.

### Production build
```bash
npm run build
```

### Preview the production build locally
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

### Deploy to GitHub Pages
```bash
npm run deploy
```
This runs the build (`predeploy`) automatically and publishes the contents of the `dist` folder to the `gh-pages` branch.

## package.json Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) and build the project |
| `npm run lint` | Run ESLint |
| `npm run preview` | Locally preview the production build |
| `npm run deploy` | Build and publish to GitHub Pages |

## Roadmap

- [ ] Sanitize HTML variable descriptions (DOMPurify)
- [ ] Side-by-side comparison of multiple decoded VINs
- [ ] Export decoded results (CSV)
- [ ] 404 page
- [ ] Human-readable handling of API error edge cases

## License

This project was built for learning purposes.
