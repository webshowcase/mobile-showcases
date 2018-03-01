
// (function() {
//   var childProcess = require("child_process");
//   var oldSpawn = childProcess.spawn;
//   function mySpawn() {
//     console.log('spawn called');
//     console.log(arguments);
//     var result = oldSpawn.apply(this, arguments);
//     return result;
//   }
//   childProcess.spawn = mySpawn;
// })();


var NPM = require('./index');
NPM.install();
// NPM.run();


// var shell = require('shelljs');
// shell.exec('npm -v');


// const { spawn } = require('child_process');
//
// const child = spawn('npm', ['install', 'chai', '-D'], {
//   stdio: 'inherit',
//   shell: true,
//   cwd: process.cwd()
// });


