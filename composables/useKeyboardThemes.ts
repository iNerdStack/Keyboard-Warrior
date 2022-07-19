import { ITheme } from '@/types';

export function useKeyboardThemes() {
  const themes: ITheme[] = [
    {
      name: 'Standard',
      keyboard: {
        style: {
          backgroundColor: 'white',
          padding: '8px',
          borderRadius: '10px',
        },
        keySpacing: {
          margin: '5px 0px',
        },
      },
      key: {
        style: {
          borderRadius: '4px',
          fontSize: '13px',
          color: 'white',
          backgroundColor: 'black',
        },
        activeTextColor: 'white',
        activeColor: '#ef4444',
        width: 6,
      },
    },
    {
      name: 'Modern White',
      keyboard: {
        style: {
          backgroundColor: '#D6D8D9',
          padding: '8px',
          borderRadius: '10px',
        },
        keySpacing: {},
      },
      key: {
        style: {
          borderRadius: '4px',
          fontSize: '13px',
          color: 'black',
          border: '1px solid #BDBDBD',
          backgroundColor: 'white',
        },
        activeTextColor: 'white',
        activeColor: '#0071BF',
        width: 6.6,
      },
    },
  ];

  return themes;
}
