const fs = require('fs');


const readFilesToArray = (filesPath) => {
  const memory = filesPath.map(
    path => {
      const strings = fs.readFileSync(
        path, { encoding: 'utf8' }).split('\n');

      if (strings.at(-1).length < 1) {
        strings.length--;
      }

      return strings;
    }
  );

  return memory;
};


module.exports = readFilesToArray;
