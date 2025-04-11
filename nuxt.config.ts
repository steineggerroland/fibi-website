// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-25',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/mdc',
    'usebootstrap',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  site: { url: 'https://neurospicy.icu', name: 'Niva - Your Friendly Companion helping you organize yourself' },
  routeRules: {
    '/': { redirect: '/de' },
    '/index.html': { redirect: '/de' },
    '/en/blog/25-03-22-welcome': { prerender: true },
    '/en/blog/25-03-28-organize-yourself': { prerender: true },
    '/en/blog/25-04-02-autism-awareness-day': { prerender: true },
    '/en/blog/25-04-03-organize-with-adhd': { prerender: true },
    '/en/blog/25-04-06-neurodivergent-routine': { prerender: true },
    '/de/blog/25-03-22-willkommen': { prerender: true },
    '/de/blog/25-03-28-organisiere-dich': { prerender: true },
    '/de/blog/25-04-02-autismus-tag': { prerender: true },
    '/de/blog/25-04-03-organisiert-mit-adhs': { prerender: true },
    '/de/blog/25-04-06-neurodivergente-routinen': { prerender: true },
    '/de/blog/25-03-22-welcome': { prerender: false },
    '/de/blog/25-03-28-organize-yourself': { prerender: false },
    '/de/blog/25-04-02-autism-awareness-day': { prerender: false },
    '/de/blog/25-04-03-organize-with-adhd': { prerender: false },
    '/de/blog/25-04-06-neurodivergent-routine': { prerender: false },
    '/en/blog/25-03-22-willkommen': { prerender: false },
    '/en/blog/25-03-28-organisiere-dich': { prerender: false },
    '/en/blog/25-04-02-autismus-tag': { prerender: false },
    '/en/blog/25-04-03-organisiert-mit-adhs': { prerender: false },
    '/en/blog/25-04-06-neurodivergente-routinen': { prerender: false }
  },
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
    strategy: 'prefix',
    langDir: '../locales/',
    defaultLocale: 'de',
    vueI18n: '../i18n.config.ts',
    detectBrowserLanguage: {
      useCookie: false,
      fallbackLocale: 'de'
    },
    bundle: {
      optimizeTranslationDirective: false,
    }
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
           @import "@/assets/scss/_default.scss";
           `
        }
      }
    },
    build: {
      target: 'esnext'
    }
  },
  nitro: {
    preset: 'static',
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: ['/blog'],
      crawlLinks: true
    },
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=5.0' }
      ]
    }
  }
})