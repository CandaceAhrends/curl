const cmdExecuter = require("../commands/cmdExecuter");

module.exports = async (req, res) => {
  const cmd = req.body.curlcmd;
  console.log("cmd sent", cmd);
  const cmdResults = await cmdExecuter(cmd);
  res.send(cmdResults);
};
