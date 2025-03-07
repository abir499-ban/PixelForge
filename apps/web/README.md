This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load Inter, a custom Google Font.

## Set up TailwindCSS and Shdcn/ui

To, set up Tailwind CSS visit [Tailwind CSS/Next.js Guide](https://tailwindcss.com/docs/installation/framework-guides/nextjs),
and follow the commands

create a `postcss.config.mjs` and the necessary boiler plate code:

```Typescript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```


and then do  the same for `tailwind.config.ts`:
```Typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

Next to set up Shdn/ui, update the `compilerOptions` in tsconfig.json file:
```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
```
