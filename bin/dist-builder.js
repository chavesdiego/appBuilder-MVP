#!/usr/bin/env node

var shell = require("shelljs");
var process = require('process');
var spawn = require('child_process').spawn;
var _7z = require('7zip')['7z'];
var fse = require('fs-extra');

process.env.NODE_ENV = 'production';
console.log('NODE_ENV [%s]', process.env.NODE_ENV);
console.log('CWD [%s]', process.cwd());

console.log('');
console.log('clean dist-builder and www...');
shell.rm('-rf', 'dist-builder');
shell.rm('-rf', './www');

shell.rm('-rf', './platforms/android/assets');
shell.rm('-rf', './platforms/android/build');
shell.rm('-rf', './platforms/android/res/drawable*');
shell.rm('-rf', './platforms/android/.gradle');
shell.rm('-rf', './platforms/android/CordovaLib/build');

console.log('clean dist-builder [OK]');

console.log('');
console.log('clean tmp...');
shell.rm('-rf', 'tmp');
console.log('clean tmp [OK]');

console.log('');
console.log('copy project...');
shell.mkdir('-p', 'tmp');
shell.cp('-fr', ['./config'], './tmp/config');
shell.cp('-fr', ['./src'], 'tmp/src');
shell.cp('-fr', ['./.builder'], 'tmp/.builder');
shell.cp('-fr', ['./.ionic'], 'tmp/.ionic');
shell.cp('-f', [
	'./.gitignore',
	'./tslint.json',
	'./tsconfig.json',
	'./.npmrc',
	'./config.hbs',
	'./ionic.config.hbs',
	'./moduleConfig.json',
], 'tmp/');

console.log('copy project [OK]');

console.log('');
console.log('change package.json...');
var packageJsonTmp = fse.readJsonSync('package.hbs');
var packageJson = fse.readJsonSync('package.json');
packageJsonTmp.devDependencies = packageJson.devDependencies;
fse.writeJsonSync('./tmp/package.hbs', packageJsonTmp);

console.log('');
console.log('compress node_modules.zip...');
var task = spawn(_7z, ['a', '-tzip', '-mx5',
	'dist-builder/app-node_modules.zip',
	'node_modules/*'
])
console.log('compress node_modules.zip [OK]');

console.log('');
console.log('compress app-root.zip...');
var task = spawn(_7z, ['a', '-tzip', '-mx9',
	'dist-builder/app-root.zip',
	'bin/*',
	'hooks/*',
	'platforms/*',
	'plugins/*',
	'resources/*',
	'./tmp/*'
])
console.log('compress app-root.zip [OK]');