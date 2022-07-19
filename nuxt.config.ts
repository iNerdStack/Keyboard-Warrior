import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - Keyboard Warrior',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Typing Master' },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-material-design-icons'],
  plugins: ['~/plugins/boot'],
  build: {},
});
