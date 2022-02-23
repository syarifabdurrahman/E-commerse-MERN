// const router = require("express").Router();
// const midtrans = require("midtrans-client");
// const Order = require("../models/Order");
// const {
//   verifyToken,
//   verifyTokenAdmin,
//   verifyTokenAuthorization,
// } = require("./verifyToken");

// let snap = new midtrans.Snap({
//   isProduction: false,
//   serverKey: process.env.MIDTRANS_CLIENT_KEY,
//   clientKey: process.env.MIDTRANS_SERVER_KEY,
// });

// router.post("/pay", verifyToken, async (req, res) => {
//   try {
//     res.status(200).json("have Paying");
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
