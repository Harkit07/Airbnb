const Listing = require("../models/listing.js");
const { listingSchema } = require("../schema.js");

module.exports.category = async (req, res) => {
  let filter = req.params.category;
  // console.log(filter);
  let allListings = await Listing.find({ category: filter });
  res.render("listings/home.ejs", { allListings });
};
