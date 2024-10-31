const express = require('express');
const router = express.Router();
const { createEvent, getAllEvents } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/event', authMiddleware, createEvent);
router.get('/events', getAllEvents);
module.exports = router;