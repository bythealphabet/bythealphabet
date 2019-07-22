const config = require("./config/config");
const app = require("./express");
const mongoose = require("mongoose");

mongoose
	.connect(config.mongoUri, { useNewUrlParser: true })
	.then(result => {
		app.listen(config.port);
		console.log("Server is listening on PORT:", config.port);
	})
	.catch(err => {
		console.log("Error Mongoose Connection:", err);
	});
