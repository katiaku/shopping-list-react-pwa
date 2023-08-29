const express = require("express");
const cors = require("cors");

// Middlewares
const app = express();

app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.sendStatus(200).json();
});

app.listen(8000, () => console.log("Server listening on port 8000"))
