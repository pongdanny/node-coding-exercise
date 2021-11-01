const express = require("express");

const app = express();

app.get("/", (req, res) => {
	res.send("test");
});

const port = 8081;

app.listen(port, () => console.log(`Listening on port ${port}...`));
