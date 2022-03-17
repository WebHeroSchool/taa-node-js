const readFilesToArray = require('./readFilesToArray');
const getMaxStringNumber = require('./getMaxStringNumber');


const showDiff = (filesPath) => {
  const empty = '* пустая строка *';
  const stringsCollection = readFilesToArray(filesPath);
  const maxStringNumber = getMaxStringNumber(stringsCollection);


  for (let index = 0; index < maxStringNumber; index++) {
    let temp = '';

    stringsCollection.forEach((array, subIndex) => {
      if (temp === '') {
        temp = array[index];
      }

      if (temp !== array[index]) {
        console.log('DIFF:');
        console.log(`Строка - ${index + 1} / файл - ${subIndex}:\n`, temp ? temp : empty);
        console.log(`Строка - ${index + 1} / файл - ${subIndex + 1}:\n`, array[index] ? array[index] : empty);
        console.log('\n');
      }

      if (index === maxStringNumber - 1
        && subIndex === stringsCollection.length - 1
        && temp === array[index]) {
        console.log('все стороки одинаковые, различий нет');
      }
    });

    temp = '';
  }
};


module.exports = showDiff;
