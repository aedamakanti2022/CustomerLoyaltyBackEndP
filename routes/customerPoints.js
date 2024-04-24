const express = require("express");
const router = express.Router();


const {  addPoints, getAllCustomerPoints,customerPoints,updatePoints,updateCusPoints } = require("../controllers/customerPoints");
const authMiddleware = require('../middleware/auth')
router.route("/addPoints").post(addPoints);
router.route("/getAllCustomerPoints").get(getAllCustomerPoints);
router.route("/customerPoints").get(authMiddleware, customerPoints);
router.route("/updatePoints").put(updatePoints);
router.route("/updateCusPoints").put(updateCusPoints);
module.exports = router;