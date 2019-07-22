const express = require("express");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')

const authRoutes = require("./routes/auth.route")
const adminRoutes = require("./routes/admin.route")
const articleRoutes = require("./routes/article.route");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(helmet())
app.use(compression())

app.use(authRoutes)
app.use(adminRoutes)
app.use(articleRoutes);


app.get("/", (req, res, next) => {
	res.json({
		message: "hey this is a start"
	});
});

module.exports = app;
