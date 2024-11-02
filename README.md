# Tanstack Router Example

## 설치

```bash
npm create vite@latest .
```

```bash
npm install @tanstack/react-router
```

```bash
npm install -D @tanstack/router-plugin @tanstack/router-devtools
```

## vite.config.js 설정

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
});
```


