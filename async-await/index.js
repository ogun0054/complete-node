const fs = require('fs');
const superagent = require('superagent');
const { resolve } = require('superagent/lib/request-base');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      err ? reject('Error!') : resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.watchFile(file, data, (err) => {
      err ? reject('Could not write a file!') : resolve('success');
    });
  });
};

// writeFilePro('dog-img.txt').then((data) => {
//   console.log('Random dog image saved to file');
// });

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    // if (err) return console.log(err.message);
    console.log(res.body.message);

    fs.writeFile('dog-img.txt', res.body.message, (err) => {
      if (err) return console.log(err.message);
      console.log('Random dog image saved to file');
    });
  })
  .catch((err) => {
    console.log(err.message);
  });

// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {

// });
