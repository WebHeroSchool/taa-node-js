const fs = require('fs');
const showDiff = require('../showDiff');


const watcher = (files) => {
  const callback = (eventType, filename) => {
    console.log("\nThe file", filename, "was modified!");
    console.log("The type of change was:", eventType);

    showDiff(files);
  };

  files.forEach(file => fs.watch(file, callback));
};


module.exports = watcher;
