// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },{ name: "viewport", content: "width=device-width, initial-scale=1"}
      ],

      script: [
        { src: "https://unpkg.com/popper.js@1/dist/umd/popper.min.js"},
        {src: "https://unpkg.com/popper.js@1/dist/umd/popper.min.js"}],
      link: [
         {
          rel: "stylesheet", 
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
        }
      ]
    },
  },
   
  modules: ["@nuxtjs/tailwindcss"],
});
