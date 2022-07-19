import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(async (nuxtApp) => {
  //load set theme from localstorage state;
  const themes = useKeyboardThemes();
  const currentThemeIndex = useCurrentThemeIndex();
  const currentTheme = useKeyboardCurrentTheme();
  currentTheme.value = themes[currentThemeIndex.value];
});
