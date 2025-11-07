// projects/mfe1/module-federation.config.js
const { shareAll, withModuleFederationPlugin } =
  require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'cloudflare-remote-app',
  filename: 'remoteEntry.js',
  exposes: {
    './Books': './src/app/remote-entry/remote-books.component.ts',
  },
  shared: shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
});