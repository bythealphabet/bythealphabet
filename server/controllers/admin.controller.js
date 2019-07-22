const Admin = require("../models/admin.model");
const list = (req, res, next) => {
	Admin.find()
		.then(admin => {
			return res.json(admin);
		})
		.catch(err => {
			return res.status(400).json({
				erro: "something is wrong when fetching the list"
			});
		});
};

const create = (req, res, next) => {
	const admin = new Admin(req.body)
		.save()
		.then(result => {
			res.status(200).json({
				message: "New Boss"
			});
		})
		.catch(err => {
			console.log("Error Create:", err);
		});
};


const adminByID = (req, res, next, id) => {
	Admin.findById(id)
		.exec()
		.then(admin => {
			req.profile = admin;
			next();
		})
		.catch(err => {
			console.log('Admin Error:',err)
			res.status("400").json({
				error: "Admin not found"
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

const remove = (req, res, next)=>{
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
}

module.exports = { list, create, adminByID, read, update, remove };
