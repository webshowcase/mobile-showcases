var cp = require('child_process');
var fs = require('fs-extra');
var path = require('path');

function ProcessError(code, message) {
  var callee = arguments.callee;
  Error.apply(this, [message]);
  Error.captureStackTrace(this, callee);
  this.code = code;
  this.message = message;
  this.name = callee.name;
}

function spawn(exe, args, cwd) {
  return new Promise(function (resolve, reject) {
    var child = cp.spawn(exe, args, {cwd: cwd || process.cwd()});
    var buffer = [];
    child.stderr.on('data', function (chunk) {
      buffer.push(chunk.toString());
    });
    child.stdout.on('data', function (chunk) {
      buffer.push(chunk.toString());
    });
    child.on('close', function (code) {
      var output = buffer.join('');
      if (code) {
        var msg = output || 'Process failed: ' + code;
        reject(new ProcessError(code, msg));
      } else {
        resolve(output);
      }
    });
  });
}


function NPM(cwd, cmd) {
  this.cwd = cwd;
  this.cmd = cmd || 'npm';
  this.output = '';
}

NPM.prototype.exec = function () {
  return spawn(this.cmd, [].slice.call(arguments), this.cwd).then(
    function (output) {
      this.output = output;
      return this;
    }.bind(this)
  );
};

NPM.prototype.install = function () {
  return this.exec('install', arguments);
};

NPM.prototype.run = function (service) {
  return this.exec('run', service);
};

NPM.prototype.prune = function () {
  return this.exec('prune');
};



module.exports = NPM;
