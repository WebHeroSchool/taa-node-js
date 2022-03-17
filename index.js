const path = require('path');

const print = require('./modules/print');
const content = require('./modules/content');

const getFilesFromDir = require('./modules/getFilesFromDir');

const wordCounter = require('./modules/wordCounter');

const pathCheck = require('./modules/pathCheck');


print(content); // В консоли выводится значение content


// скрипт, который сканирует рабочую директорию и выводит список всех файлов
const workDir = path.resolve();
console.log('\nВ этой дирректории, есть файлы:', getFilesFromDir(workDir), '\n');


// скрипт, который который считает количество слов каком-нибудь файле
const filePath = './files/excalibur-song.txt';
console.log('Кол-во слов в файле', path.basename(filePath), '=', wordCounter(filePath), '\n');


// скрипт, который который берет из файла пути, и проверяет существование пути
const routes = './files/pathes.txt';
pathCheck(routes);
