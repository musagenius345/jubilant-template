// import postcssPresetEnv from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/postcss-preset-env/dist/index.mjs';
import postcssPresetEnv from 'postcss-prest-env';

export default {
  plugins: [
  postcssPresetEnv({
      stage: 1
    })
  ]
};