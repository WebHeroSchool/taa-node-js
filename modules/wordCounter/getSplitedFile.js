const fs = require('fs');


const getSplitedFile = (filePath) => {
  try {
    const file = fs.readFileSync(filePath, { encoding: 'utf8' });
    const splitFile = file.split(/[\s]+/);

    if (splitFile.at(-1).length < 1) {
      splitFile.length--;

      return splitFile;
    }
  }

  catch (error) {
    console.log(error);
  }
};


module.exports = { getSplitedFile };
