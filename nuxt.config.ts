// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // Modern Nuxt 4 directory structure & features
  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  // Modules: Tailwind for styling, Pinia for state management
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  // Source directory configuration
  srcDir: 'app/',

  // Pinia configuration
  pinia: {
    // Enables auto-import for stores within the app/stores directory
    storesDirs: ['./app/stores/**'],
  },

  /**
   * Tailwind CSS configuration.
   * Ensures all files in the app directory are scanned for classes.
   */
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  }
})