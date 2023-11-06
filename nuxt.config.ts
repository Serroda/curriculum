// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  ssr: false,
  css: [
    "assets/css/main.css"
  ],
  runtimeConfig: {
    public: {
      'intersectionObserverThreshold': process.env.INTERSECTION_OBSERVER_THRESHOLD
    }
  },
  app: {
    baseURL: "/curriculum/",
    buildAssetsDir: "./",
    head: {
      meta: [{
        "name": "theme-color",
        "content": process.env.THEME_COLOR
      }]
    }
  }
})