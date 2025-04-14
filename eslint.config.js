import plugin from './index.js';

export default [
  {
    plugins: {
      'no-moment': plugin,
    },
    rules: {
      'no-moment/no-moment': 'error',
    },
  },
];
