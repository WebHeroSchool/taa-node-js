const { print } = require('./modules/print');
const { content } = require('./modules/content');
const { getFilesFromDir } = require('./modules/getFilesFromDir');
const path = require('path');


print(content); // В консоли выводится значение content


// скрипт, который сканирует рабочую директорию и выводит список всех файлов
const workDir = path.resolve();
console.log(getFilesFromDir(workDir));
