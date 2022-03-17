const scanWorkDir = require('./scanWorkDir');
const filterByFiles = require('./filterByFiles');


const getFilesFromDir = workDirPath => {
  try {
    const scanedDir = scanWorkDir(workDirPath);
    const files = filterByFiles(scanedDir);

    return files;
  }

  catch (error) {
    return error;
  }
};


module.exports = getFilesFromDir;
