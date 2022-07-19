type KeyProp = {
  name: string;
  label: string;
  activeColor?: string;
  color?: string;
  labelColor?: string;
  ratio?: number;
  row: number;
}[];

export function useKeyboardLayout(): KeyProp {
  let colors = useKeyboardColors();

  return [
    {
      name: '`',
      label: '`',
      row: 1,
    },
    {
      name: '1',
      label: '1',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 1,
    },
    {
      name: '2',
      label: '2',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 1,
    },
    {
      name: '3',
      label: '3',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 1,
    },
    {
      name: '4',
      label: '4',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 1,
    },
    {
      name: '5',
      label: '5',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 1,
    },
    {
      name: '6',
      label: '6',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 1,
    },
    {
      name: '7',
      label: '7',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 1,
    },
    {
      name: '8',
      label: '8',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 1,
    },
    {
      name: '9',
      label: '9',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 1,
    },
    {
      name: '0',
      label: '0',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 1,
    },
    {
      name: '-',
      label: '-',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 1,
    },
    {
      name: '=',
      label: '=',
      row: 1,
    },
    {
      name: 'Backspace',
      label: 'Del',
      ratio: 1.5,
      row: 1,
    },
    {
      name: 'Tab',
      label: 'Tab',
      ratio: 1.5,
      row: 2,
    },
    {
      name: 'q',
      label: 'q',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 2,
    },
    {
      name: 'w',
      label: 'w',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 2,
    },
    {
      name: 'e',
      label: 'e',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 2,
    },
    {
      name: 'r',
      label: 'r',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 2,
    },
    {
      name: 't',
      label: 't',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 2,
    },
    {
      name: 'y',
      label: 'y',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 2,
    },
    {
      name: 'u',
      label: 'u',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 2,
    },
    {
      name: 'i',
      label: 'i',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 2,
    },
    {
      name: 'o',
      label: 'o',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 2,
    },
    {
      name: 'p',
      label: 'p',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 2,
    },
    {
      name: '[',
      label: '[',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 2,
    },
    {
      name: ']',
      label: ']',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 2,
    },
    {
      name: '\\',
      label: '\\',
      row: 2,
    },
    {
      name: 'CapsLock',
      label: 'caps',
      ratio: 2,
      row: 3,
    },
    {
      name: 'a',
      label: 'a',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 3,
    },
    {
      name: 's',
      label: 's',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 3,
    },
    {
      name: 'd',
      label: 'd',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 3,
    },
    {
      name: 'f',
      label: 'f',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 3,
    },
    {
      name: 'g',
      label: 'g',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 3,
    },
    {
      name: 'h',
      label: 'h',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 3,
    },
    {
      name: 'j',
      label: 'j',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 3,
    },
    {
      name: 'k',
      label: 'k',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 3,
    },
    {
      name: 'l',
      label: 'l',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 3,
    },
    {
      name: ';',
      label: ';',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 3,
    },
    {
      name: "'",
      label: "'",
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 3,
    },
    {
      name: 'Enter',
      label: 'Enter',
      color: colors[4].color,
      activeColor: colors[4].activeColor,
      ratio: 2,
      row: 3,
    },
    {
      name: 'Shift',
      label: 'Shift',
      ratio: 2.5,
      row: 4,
    },
    {
      name: 'z',
      label: 'z',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 4,
    },
    {
      name: 'x',
      label: 'x',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 4,
    },
    {
      name: 'c',
      label: 'c',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 4,
    },
    {
      name: 'v',
      label: 'v',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 4,
    },
    {
      name: 'b',
      label: 'b',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 4,
    },
    {
      name: 'n',
      label: 'n',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 4,
    },
    {
      name: 'm',
      label: 'm',
      color: colors[0].color,
      activeColor: colors[0].activeColor,
      row: 4,
    },
    {
      name: ',',
      label: ',',
      color: colors[1].color,
      activeColor: colors[1].activeColor,
      row: 4,
    },
    {
      name: '.',
      label: '.',
      color: colors[2].color,
      activeColor: colors[2].activeColor,
      row: 4,
    },
    {
      name: '/',
      label: '/',
      color: colors[3].color,
      activeColor: colors[3].activeColor,
      row: 4,
    },
    {
      name: 'Shift',
      label: 'Shift',
      ratio: 2.5,
      row: 4,
    },
    {
      name: 'fn',
      label: 'fn',
      row: 5,
    },
    {
      name: 'Control',
      label: 'Ctl',
      row: 5,
    },
    {
      name: 'Alt',
      label: 'Alt',
      row: 5,
    },
    {
      name: '',
      label: '',
      row: 5,
    },
    {
      name: ' ',
      label: '',
      ratio: 5,
      row: 5,
    },
    {
      name: '',
      label: '',
      row: 5,
    },
    {
      name: 'Alt',
      label: 'Alt',
      row: 5,
    },
    {
      name: '',
      label: '',
      row: 5,
    },
    {
      name: '',
      label: '',
      row: 5,
    },
    {
      name: '',
      label: '',
      ratio: 2.5,
      row: 5,
    },
  ];
}