const express = require("express");
require("dotenv").config()

const PORT = process.env.PORT || 3000

const server = express();

server.listen(3000, () => {
    console.log("Server listening on PORT 3000");
})

