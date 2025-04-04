// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-03-25',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxtjs/mdc',
    'usebootstrap',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://neurospicy.icu'
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
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: '../locales/',
    defaultLocale: 'de',
    vueI18n: '../i18n.config.ts',
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
    minify: true
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
      ]
    }
  }
})