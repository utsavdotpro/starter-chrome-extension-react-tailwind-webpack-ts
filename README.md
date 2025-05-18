[<img src="https://ik.imagekit.io/iutsav/fork_l0RKONb5l.svg" height="30" />](https://githubbox.com/utsavdotpro/starter-chrome-extension-tailwind-webpack-ts)

# Chrome Extension Starter Template

A modern starter template for building Chrome extensions with:

[![](https://img.shields.io/badge/React-v19-61dafb?style=for-the-badge&logo=react)](https://react.dev)
[![](https://img.shields.io/badge/Tailwind-v3-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![](https://img.shields.io/badge/TypeScript-v5-3178c6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![](https://img.shields.io/badge/Webpack-v5-8DD6F9?style=for-the-badge&logo=webpack)](https://webpack.js.org/)

---

## How to Reuse Locally?

Use `degit` to download the repository locally.

> **❓ What is [degit](https://github.com/Rich-Harris/degit)?**  
> degit downloads a copy of git repository with downloading its entire git history.

Install degit globally.

```bash
pnpm install -g degit
```

Download the latest version

```bash
degit utsavdotpro/starter-chrome-extension-tailwind-webpack-ts
```

## Features

- Manifest V3 compliant
- React for building UI components
- Modern JavaScript with TypeScript support
- Styling with Tailwind CSS
- Hot reloading during development
- Optimized production build

## Getting Started

### Installation

```bash
pnpm install
```

### Development

```bash
pnpm dev
```

### Build for Production

```bash
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
│   ├── content/        # Content script with React components
│   │   ├── index.tsx   # Content script entry point
│   │   └── ContentApp.tsx # Content React component
│   ├── popup/          # Popup script with React components
│   │   ├── index.tsx   # Popup entry point
│   │   └── Popup.tsx   # Popup React component
│   └── global.css      # Global styles (includes Tailwind)
├── webpack.config.js   # Webpack configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Customization

- Update the `manifest.json` file to change the extension name, description, permissions, etc.
- Modify the icons in `public/icons/` to customize the extension icon
- Edit the popup UI in `src/popup/Popup.tsx` and `public/popup.html`
- Customize content script UI in `src/content/ContentApp.tsx`

## License

MIT
