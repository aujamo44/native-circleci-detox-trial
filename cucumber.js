const arguments = [
    '--require-module @babel/register',
    'cucumber/*.feature',
    '-f @cucumber/pretty-formatter'
    ].join(' ');
module.exports = {
    default: arguments,
};