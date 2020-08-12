const path = require("path");

module.exports = {
  entry: {
    index: "./Frontend/src/index.js",
    contribute: "./Frontend/contribute.js",
    optout: "./Frontend/optout.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "Frontend/dist"),
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
};
