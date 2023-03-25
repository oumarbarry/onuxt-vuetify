export default defineNuxtConfig({
  typescript: { shim: false },

  experimental: { inlineSSRStyles: false },

  css: [
    // '@unocss/reset/tailwind.css',
    'vuetify/lib/styles/main.sass',
  ],

  build: { transpile: ['vuetify'] },

  modules: [
    'nuxt-icon',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxt/devtools',
  ],

  image: {
    domains: ['https://images.unsplash.com'],
    alias: { unsplash: 'https://images.unsplash.com' },
    unsplash: {},
  },

  sourcemap: false,
})
