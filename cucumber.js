const cucumberStart = [
  'cucumber/*.feature',
  '-f @cucumber/pretty-formatter',
].join(' ');
module.exports = {
  default: cucumberStart,
};
