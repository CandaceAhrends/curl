const { exec } = require("child_process");
module.exports = async (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (stdout) {
        resolve(stdout);
      } else {
        reject(new Error("check the curl format"));
      }
    });
  });
};
