// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    "@/assets/css/style.css",
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.min.css",
  ],

  modules: ["@nuxtjs/tailwindcss"],
  build: {
    transpile: ["primevue"],
  },
});
