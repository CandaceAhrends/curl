const { read } = require("../files");

module.exports = async (req, res) => {
  try {
    const content = await read({
      fileName: req.params.file,
    });
    res.status(200).send({ content });
  } catch (err) {
    res.status(500).send(err);
  }
};
