const getMaxStringNumber = (stringsCollection) => {
  let max = 0;

  stringsCollection.forEach(strings => {
    if (strings.length > max) {
      max = strings.length;
    }
  });

  return max;
};


module.exports = getMaxStringNumber;
