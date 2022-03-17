const fs = require('fs');


const getRoutes = (filePath) => {
  try {
    const string = fs.readFileSync(filePath, { encoding: 'utf8' });
    const result = string.split('\n');

    if (result.at(-1).length < 1) {
      result.length--;
    }

    return result;
  }

  catch (error) {
    console.log(error);
  }
};


module.exports = getRoutes;
