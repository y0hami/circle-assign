import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/circle-assign.js',
    format: 'umd',
    sourceMap: 'inline',
    name: 'circleAssign',
  },
  plugins: [
    babel(),
  ],
};
