const Admin = require("../models/admin.model");
const config = require("../config/config");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

const signin = (req, res) => {
	Admin.findOne({ name: req.body.name })
		.then(admin => {
			if (!admin.authenticate(req.body.password)) {
				return res.status("401").send({
					error: "name and password don't match."
				});
			}

			const token = jwt.sign({ _id: admin._id }, config.jwtSecret);
			res.cookie("t", token, {
				expire: new Date() + 9999
			});
			res.json({ token, admin: { _id: admin._id, name: admin.name } });
		})
		.catch(err => {
			return res.status("401").json({
				error: "admin not found"
			});
		});
};

const signout = (req, res) => {
	res.clearCookie("t");
	return res.status("200").json({
		message: "signed out"
	});
};

const requireSignin = expressJwt({
	secret: config.jwtSecret,
	userProperty: "auth"
});

const hasAuthorization = (req, res, next) => {
	const authorized =
		req.profile && req.auth && req.body.adminId == req.auth._id;
	if (!authorized) {
		console.log('Error,Not authorized', err)
		return res.status("403").json({

			error: "User is not authorized"
		});
	}
	next();
};

module.exports = { signin, signout, requireSignin, hasAuthorization };
