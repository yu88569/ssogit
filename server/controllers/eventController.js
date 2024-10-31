// controllers/eventController.js
exports.createEvent = async (req, res) => {
    try {
      const event = new Event(req.body);
      await event.save();
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.getAllEvents = async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  