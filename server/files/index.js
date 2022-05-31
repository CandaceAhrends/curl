const fs = require("fs");

const SAVE_DIR = "curls";
module.exports.save = async ({ data, fileName, dir = SAVE_DIR }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./${dir}/${fileName}`, data, (writeFileError) => {
      if (writeFileError) {
        reject(writeFileError);
        return;
      }

      resolve(true);
    });
  });
};

module.exports.read = async ({ fileName, dir = SAVE_DIR }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${dir}/${fileName}`, "utf8", (readFileError, data) => {
      if (readFileError) {
        reject(readFileError);
        return;
      }
      resolve(data);
    });
  });
};

module.exports.list = async (dir = SAVE_DIR) => {
  return new Promise((resolve, reject) => {
    fs.readdir(`./${dir}`, (err, files) => {
      if (err) {
        reject(err);
      }
      resolve(files);
    });
  });
};

module.exports.init = () => {
  if (!fs.existsSync(SAVE_DIR)) {
    fs.mkdirSync(SAVE_DIR);
  }
  if (!fs.existsSync("data")) {
    fs.mkdirSync("data");
  }
};
