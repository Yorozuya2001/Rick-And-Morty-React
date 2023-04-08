const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const router = require("./routes/index");
const server = express();
const { conn } = require("./DB_connection");
const PORT = 3001;

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use("/", router);

const startSever = async () => {
  try {
    await conn.sync();
    console.log("Sequelize synced successfully");
    server.listen(PORT, () => {
      console.log("Server raised in port " + PORT);
    });
  } catch (err) {
    console.error("Error syncing Sequelize:", err);
  }
};

startSever();
