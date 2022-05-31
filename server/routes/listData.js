const { list } = require("../files");

module.exports = async (req, res) => {
  try {
    const files = await list("data");
    res.status(200).send({ list: files });
  } catch (err) {
    res.status(500).send({ error: "list not available" });
  }
};
