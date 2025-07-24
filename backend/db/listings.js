const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
    profileImage: String,
    serviceType: String,
    organizationName: String,
    fullName: String,
    languages: [String],
    gender: String,
    phoneNumber: String,
    email: String,
    vehicleType: String,
    vehicleNumber: String,
    Documents:[{
        Type: String,
        Image: String
    }],
    JoiningDate: Date,
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;