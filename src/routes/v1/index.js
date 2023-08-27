const express = require("express");
const bookRoute = require('./book.route');
const hotelRoute = require('./hotel.route');
const movieRoute = require('./movie.route');
const busRoute = require('./bus.route');
const musicRoute = require('./music.route');



const router = express.Router();

router.use("/books", bookRoute);
router.use("/hotel", hotelRoute);
router.use("/movie", movieRoute);
router.use("/bus", busRoute);
router.use("/music", musicRoute);



module.exports = router;