const express = require('express');
const router = express.Router();
const { Socket } = require('../models');

// GET /sockets
router.get('/', async (req, res) => {
  try {
    const sockets = await Socket.findAll({
      attributes: ['id', 'name'],
    });
    res.json(sockets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
