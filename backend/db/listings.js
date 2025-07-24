const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
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
    }],
    JoiningDate: {
        type: Date,
        default: Date.now
    },
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;