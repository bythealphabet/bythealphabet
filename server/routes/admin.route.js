const express = require("express");
const adminCtrl = require("../controllers/admin.controller");
const authCtrl = require("../controllers/auth.controller");

const router = express.Router();

router
	.route("/api/admin")
	.post(adminCtrl.create)
	.get(adminCtrl.list);

router
	.route("/api/admin/:adminId")
	.get(authCtrl.requireSignin, authCtrl.hasAuthorization, adminCtrl.read)
	.put(authCtrl.requireSignin, authCtrl.hasAuthorization, adminCtrl.update)
	.delete(
		authCtrl.requireSignin,
		authCtrl.hasAuthorization,
		adminCtrl.remove
	);

router.param("adminId", adminCtrl.adminByID);

module.exports = router;
