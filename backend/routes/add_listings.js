const express = require('express');
const mongoose = require('mongoose');
const Listing = require('../db/listings');
const router = express.Router();

router.post('/add-helper', async(req, res) => {
    try{
        const newListing = req.body;
        let helper_listing = new Listing({
            // serviceType: newListing.serviceType,
            // organizationName: newListing.organizationName,
            // fullName: newListing.fullName,
            // languages: newListing.languages,
            // gender: newListing.gender,
            // phoneNumber: newListing.phoneNumber,
            // email: newListing.email,
            // vehicleType: newListing.vehicleType,
            // vehicleNumber: newListing.vehicleNumber,
            // Documents: newListing.Documents
            serviceType: newListing.serviceType || '',
        })

        helper_listing = await helper_listing.save();
        return res.status(201).json("working ra");
    }
    catch(err) {
        console.error("Error adding helper:", err);
        return res.status(500).json({ error: "Internal server error" });
    }
})

module.exports = router;