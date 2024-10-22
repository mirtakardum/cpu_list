const express = require('express');
const router = express.Router();
const { Cpu, Socket } = require('../models');

router.get('/', async (req, res) => {
  try {
    const cpus = await Cpu.findAll({
      attributes: ['id', 'brand', 'model', 'clockSpeed', 'cores', 'threads', 'tdp', 'price'],
      include: [
        {
          model: Socket,
          attributes: ['name'],
        },
      ],
    });
    res.json(cpus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const cpu = await Cpu.findByPk(req.params.id, {
      include: [
        {
          model: Socket,
          attributes: ['name'],
        },
      ],
    });
    if (!cpu) {
      return res.status(404).json({ message: 'CPU not found' });
    }
    res.json(cpu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const cpu = await Cpu.findByPk(req.params.id);
    if (!cpu) {
      return res.status(404).json({ message: 'CPU not found' });
    }

    const {
      brand,
      model,
      socketId,
      clockSpeed,
      cores,
      threads,
      tdp,
      price,
    } = req.body;

    await cpu.update({
      brand,
      model,
      socketId,
      clockSpeed,
      cores,
      threads,
      tdp,
      price,
    });

    res.json(cpu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
