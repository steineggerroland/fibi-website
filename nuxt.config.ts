// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-25',
  devtools: { enabled: true },
  site: { url: 'neurospicy.icu' },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/mdc',
    'usebootstrap',
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de.json'
      },
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json'
      }
    ],
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: '../locales/',
    defaultLocale: 'de',
    vueI18n: '../i18n.config.ts'
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
           @import "@/assets/scss/_variables.scss";
           `
        }
      }
    }
  }
})