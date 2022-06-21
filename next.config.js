module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|gif|jpg|jpeg)(\?|$)/,
      issuer: {
        exclude: /\.(css|sass|scss)$/i,
      },
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: `/_next/static/media/`,
            outputPath: `${options.isServer ? "../" : ""}static/media/`,
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
};
