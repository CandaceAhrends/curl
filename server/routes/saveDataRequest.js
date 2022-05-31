const { save } = require("../files");

module.exports = async (req, res) => {
  await save({
    data: req.body.data,
    fileName: req.body.fileName,
    dir: "data",
  });
  res.status(200).send({ saved: true, savedAs: req.body.fileName });
};
