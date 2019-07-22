const mongoose = require("mongoose");

mongoose.set("userCreateIndex", true);
mongoose.set("useFindandModify", false);

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
	title: {
		type: String,
		trim: true,
		required: "title is required"
	},
	intro: {
		type: String,
		trim: true,
		required: "intro is required"
	},
	text: {
		type: String,
		trim: true,
		required: "you should write a couple of lines here"
	},
	image: {
		type: String,
		trim: true
	},
	updated: Date,
	created: {
		type: Date,
		default: Date.now
	}
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
