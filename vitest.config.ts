import { defineConfig } from "vitest/config";
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./tests/setupTests.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"]
    },
  },
});
