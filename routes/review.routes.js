import { Router } from 'express';
import { getReviews } from './../controller/review.controller.js';

const router = Router();

//define routes...
router.get('/', getReviews);

export default router