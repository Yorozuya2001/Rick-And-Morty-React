const axios = require("axios");

const getCharById = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, image, name, gender, species } = response.data;
      const obj = {
        id,
        image,
        name,
        gender,
        species,
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
      return;
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharById;
