import { ITheme } from '@/types';
import { useStorage } from '@vueuse/core';

//Set keyboard Layout User Preference 
export const useCurrentThemeIndex = () => useStorage('currentThemeIndex', 0);

export const useKeyboardCurrentTheme = () =>
  useState<ITheme>('currentKeyboardTheme', () => ({
    name: '',
    keyboard: { style: {}, keySpacing: {} },
    key: {
      style: {},
      color: '',
      activeTextColor: '',
      activeColor: '',
      width: 0,
    },
  }));
