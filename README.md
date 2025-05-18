# Chrome Extension Starter Template

A modern starter template for building Chrome extensions with:

- TypeScript
- Tailwind CSS
- Webpack

## Features

- Manifest V3 compliant
- Modern JavaScript with TypeScript support
- Styling with Tailwind CSS
- Hot reloading during development
- Optimized production build

## Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server with hot reload
npm run dev
# or
pnpm dev
```

### Build for Production

```bash
# Build the extension for production
npm run build
# or
pnpm build
```

## Loading the Extension in Chrome

1. Build the extension using `npm run build` or `pnpm build`
2. Open Chrome and navigate to `chrome://extensions`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the `dist` directory from this project

## Project Structure

```
├── public/             # Static assets and manifest.json
│   ├── icons/          # Extension icons
│   ├── manifest.json   # Extension manifest
│   └── popup.html      # Popup HTML
├── src/                # Source code
│   ├── background.ts   # Background script
│   ├── content.ts      # Content script
│   ├── popup.ts        # Popup script
│   └── global.css      # Global styles (includes Tailwind)
├── webpack.config.js   # Webpack configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

- Update the `manifest.json` file to change the extension name, description, permissions, etc.
- Modify the icons in `public/icons/` to customize the extension icon
- Edit the popup UI in `public/popup.html` and `src/popup.ts`

## License

MIT
