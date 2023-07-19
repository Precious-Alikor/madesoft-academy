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

  app: {
    head: {
      title: "Madesoft Academy",
    

      link: [
       
        {
          href: "path/to/font-awesome/css/font-awesome.min.css",
          rel: "stylesheet",
        },
   
      ],
      script: [
        {
          src: 'https://kit.fontawesome.com/ed95a14eea.js'
      },
      ],
    },
  },
});
