const Router = require("express");
const getCharById = require("../controllers/getCharById");
const getDetail = require("../controllers/getCharDetail");
const getCharacters = require("../controllers/getCharacters");
const postCharacter = require("../controllers/postCharacter");
const deleteCharacter = require("../controllers/deleteCharacter");
const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getDetail);
router.get("/rickandmorty/fav", getCharacters);
router.post("/rickandmorty/fav", postCharacter);
router.delete("/rickandmorty/fav/:id", deleteCharacter);

module.exports = router;
