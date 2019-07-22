const express = require("express");
const articleCtrl = require("../controllers/article.controller");
const authCtrl = require("../controllers/auth.controller");

const router = express.Router();

router
	.route("/api/article")
	.get(articleCtrl.list)
	.post(
		articleCtrl.create
	);

router
	.route("/api/article/:articleId")
	.get(articleCtrl.read)
	.put(authCtrl.requireSignin, authCtrl.hasAuthorization, articleCtrl.update)
	.delete(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		articleCtrl.remove
	);

router.param("articleId", articleCtrl.articleByID);

module.exports = router;
