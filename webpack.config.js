const path = require("path")

module.exports = {
  // o webpack-dev-server é um servidor local integrado ao webpack: as mudanças feitas são automaticamente
  // compiladas e mostradas no navegador.
  devServer: {
    // localização dos arquivos estáticos, por padrão é a pasta public.

    // o arquivo html e os demais estáticos devem estar na mesma pasta, senão
    // o devServer não atualiza sozinho o webpack.
    static: {
      directory: path.resolve(__dirname, "public"),
    },
  },
  entry: {
    index: "./src/js/index.js",
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].min.js",
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env"]],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}
