// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  runtimeConfig: {
    firebaseApiKey: '',
    firebaseAuthDomain: '',
  },
  serverMiddleware: ["~/server/middleware/cors.js"],
  nitro: {
    output: {
      publicDir: "../web",
    }
  },
})
