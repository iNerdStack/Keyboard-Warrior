type ColorProps = Array<{
    color: string;
    activeColor: string;
}>;

export function useKeyboardColors(): ColorProps {
  return [
    {
      color: '#15803d', //bg-green-700
      activeColor: '#4ade80', //bg-green-400
    },
    {
      color: '#1d4ed8', //bg-blue-700
      activeColor: '#60a5fa', //bg-blue-400
    },
    {
      color: '#c2410c', //bg-orange-700
      activeColor: '#fb923c', //bg-orange-400
    },
    {
      color: '#7e22ce', //bg-purple-700
      activeColor: '#c084fc', //bg-purple-400
      },
    {
      color: '#ffffff', //bg-white
      activeColor: '#4ade80', //bg-green-400
    },
  ];
}
