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
  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      '2xl': 1536
    },
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      }
    }
  },
  site: { url: 'https://neurospicy.icu', name: 'Niva - Your Friendly Companion helping you organize yourself' },
  sitemap: {
    exclude: [
      '/__nuxt_content/blog/sql_dump',
      '/__nuxt_content/pages/sql_dump',
      '/blog',
      '/de/actions/startConversation',
      '/de/actions/joinBeta',
      '/en/actions/startConversation',
      '/en/actions/joinBeta'
    ]
  },
  routeRules: {
    '/': { redirect: '/de' },
    '/index.html': { redirect: '/de' },
    "*/blog/**": { prerender: true },
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