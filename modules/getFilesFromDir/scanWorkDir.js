const fs = require('fs');


const scanWorkDir = workDirPath => {
  try {
    return fs.readdirSync(workDirPath);
  }

  catch (error) {
    return error;
  }
};


module.exports = { scanWorkDir };
