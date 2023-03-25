const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { image, name, gender, origin, status, species } = response.data;
      const obj = {
        image,
        name,
        gender,
        origin,
        status,
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

module.exports = getCharDetail;
