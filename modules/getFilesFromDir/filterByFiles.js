const fs = require('fs');


const filterByFiles = (dir) => {
  try {
    return dir.filter(item => fs.lstatSync(item).isFile());
  }

  catch (error) {
    return error;
  }
};


module.exports = { filterByFiles };
