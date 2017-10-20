#!/usr/bin/env node

var shell = require("shelljs");

console.log('');
console.log('npmjs.com publishing...');

shell.exec('npm version patch && npm publish && git push --follow-tags', {
	async: true
}, function (code, stdout, stderr) {
	console.log('finished!');
});
