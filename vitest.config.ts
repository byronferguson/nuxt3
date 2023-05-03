// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// export default defineConfig({
//   plugins: [vue()],
//   test: {
//     globals: true,
//     environment: "jsdom",
//   },
// });

import { defineVitestConfig } from 'nuxt-vitest/config';

export default defineVitestConfig({
  test: {
    environment: 'nuxt',
  },
});
