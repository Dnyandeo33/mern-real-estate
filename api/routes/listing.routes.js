import express from 'express';
import listingController from '../controller/listing.controller.js';
import verifyToken from '../middleware/verifyToken.js';
const { createListing } = listingController

const router = express.Router()

router.post('/create', verifyToken, createListing)

export default router
