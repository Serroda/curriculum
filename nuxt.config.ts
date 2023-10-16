// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@unocss/nuxt"],
  css: [
    "assets/css/main.css"
  ],
  runtimeConfig: {
    public: {
      'intersectionObserverThreshold': process.env.INTERSECTION_OBSERVER_THRESHOLD
    }
  },
  app: {
    baseURL: "/Portfolio/"
  }
})