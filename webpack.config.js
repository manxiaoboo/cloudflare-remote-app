const {
  shareAll,
  ModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

// 关键：开启 ESM 输出
module.exports = {
  experiments: { outputModule: true },
  output: {
    module: true,
    scriptType: 'module',
    library: { type: 'module' },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'cloudflare-remote-app',

      exposes: {
        './Books': './src/app/remote-entry/remote-books.component.ts',
      },

      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    }),
  ],
};
