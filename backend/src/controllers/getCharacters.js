let data = require("../utils/data");

const getCharacters = (req, res) => {
  res.status(200).json(data);
};

module.exports = getCharacters;
