const Article = require("../models/article.model");
const _ = require('lodash')

const list = (req, res, next) => {
	Article.find()
		.then(articles => {
			return res.json(articles);
			res.json({ message: "im in the controller now" });
		})
		.catch(err => {
			console.log("List Error:", err);
			return res.status(400).json({
				erro: "something is wrong when fetching the list"
			});
		});
};

const create = (req, res, next) => {
	const article = new Article(req.body)
		.save()
		.then(result => {
			res.status(200).json({
				message: "article is succesfully saved"
			});
		})
		.catch(err => {
			console.log("Error Create:", err);
		});
};

const articleByID = (req, res, next, id) => {
	Article.findById(id)
		.exec()
		.then(article => {
			req.profile = article;
			next();
		})
		.catch(err => {
			console.log("Article Error:", err);
			res.status("400").json({
				error: "Article not found"
			});
		});
};

const read = (req, res) => {
	return res.json(req.profile);
};

const update = (req, res, next) => {
	let article = req.profile;

	article = _.extend(article, req.body);
	article.updated = Date.now();
	article
		.save()
		.then(article => {
			res.json(article);
		})
		.catch(err => {
			return res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		});
};

const remove = (req, res, next) => {
	let article = req.profile;
	article
		.remove()
		.then(deletedArticle => {
			res.json(deletedArticle);
		})
		.catch(err => {
			res.status(400).json({
				error: errorHandler.getErrorMessage(err)
			});
		});
};

module.exports = { articleByID, read, list, create, update, remove };
