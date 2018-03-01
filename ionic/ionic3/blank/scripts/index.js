var NPM = require('./npm');
var fs = require('fs-extra');
var path = require('path');

exports.install = function () {
  var npm = new NPM(process.cwd(), /^win/.test(process.platform) ? 'npm.cmd' : 'npm');
  npm.install().then(function (res) {
    console.log(res);
  });
};

exports.run = function () {
  var npm = new NPM(process.cwd(), /^win/.test(process.platform) ? 'npm.cmd' : 'npm');
  npm.run('build');
};

exports.clean = function clean() {
  fs.removeSync('');
};
