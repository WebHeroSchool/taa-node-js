const getSplitedFile = require('./getSplitedFile');


const wordCounter = (filePath) => {
  try {
    const splitFile = getSplitedFile(filePath);

    return splitFile.length;
  }

  catch (error) {
    console.log(error);
  }
};


module.exports = wordCounter;
