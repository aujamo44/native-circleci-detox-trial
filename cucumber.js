const arguments = ['cucumber/*.feature', '-f @cucumber/pretty-formatter'].join(
  ' ',
);
module.exports = {
  default: arguments,
};
