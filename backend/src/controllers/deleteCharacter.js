let data = require("../utils/data");

const deleteCharacter = (req, res) => {
  const { id } = req.params;

  const index = data.findIndex((date) => date.id == id);

  if (index !== -1) {
    data.splice(index, 1);
    res.status(200).json(data);
  } else {
    res.status(404).json({error: "No se ha encontrado un ID"})
  }
};

module.exports = deleteCharacter;
