import baseColors from '../../tokens/color/base.js';

const swapped = (key) => ({
  ...baseColors.color[key],
  dark: baseColors.color[key].light,
  light: baseColors.color[key].dark,
});

export default {
  color: {
    ...baseColors.color,
    blue: swapped('blue'),
    indigo: swapped('indigo'),
    purple: swapped('purple'),
    pink: swapped('pink'),
    red: swapped('red'),
    orange: swapped('orange'),
    yellow: swapped('yellow'),
    green: swapped('green'),
    teal: swapped('teal'),
    cyan: swapped('cyan'),
    gray: swapped('gray'),
    border: {
      value: '#39414B',
    },
  },
};
