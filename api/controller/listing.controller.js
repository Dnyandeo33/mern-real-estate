import Listing from "../models/listing.model.js"
const listingController = {
    createListing: async (req, res, next) => {
        try {
            const listing = await Listing.create(req.body)
            res.status(201).json(listing)
        } catch (error) {
            next(error)
        }
    }
}

export default listingController