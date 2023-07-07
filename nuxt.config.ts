// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: [
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
    "~/assets/style/variables.scss",
  ],
  alias: {
    "@": "/<rootDir>",
  },
});
