module.exports = {
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  chainWebpack: (config) => {
    config.plugin("html").tap((opts) => {
      opts[0].template = "./index.html";
      return opts;
    });
  },
};
