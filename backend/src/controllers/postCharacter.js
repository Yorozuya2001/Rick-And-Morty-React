let data = require("../utils/data");

const postCharacter = (req, res) => {
  const { id, name, species, gender, image } = req.body;
  data.push({ id, name, species, gender, image });
  res.status(200).json(data);
};

module.exports = postCharacter;
