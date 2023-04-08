const axios = require("axios");

const URL_BASE = "https://be-a-rym.up.railway.app/api";
const API_KEY = "738a72766c9f.da2fc0c3ddbe8477c91a";

const getCharDetail = async (req, res) => {
  try {
    const response = await axios.get(
      `${URL_BASE}/character/${req.params.id}?key=${API_KEY}`
    );
    const data = response.data;
    const { id, image, name, gender, species, origin, status, location } = data;
    console.log(data);
    res.status(200).json({
      id,
      image,
      name,
      gender,
      species,
      origin,
      status,
      location,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getCharDetail;
