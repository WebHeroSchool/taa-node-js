const fs = require('fs');
const getRoutes = require('./getRoutes');


const pathCheck = (filePath) => {
  try {
    const routes = getRoutes(filePath);

    routes.forEach(route => console.log(
      'Файл по пути:', route, fs.existsSync(route)
        ? 'существует'
        : 'не существует'
    ));
  }

  catch (error) {
    console.log(error);
  }
};


module.exports = pathCheck;
