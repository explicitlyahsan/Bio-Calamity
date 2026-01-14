const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');

router.get('/active-disasters', (req, res) => {
  fs.readFile(path.join(dataDir, 'activeDisasters.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

router.get('/calamity-types', (req, res) => {
  fs.readFile(path.join(dataDir, 'calamityTypes.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

router.get('/animal-behaviors', (req, res) => {
  fs.readFile(path.join(dataDir, 'animalBehaviors.json'), 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data' });
      return;
    }
    res.json(JSON.parse(data));
  });
});

module.exports = router;
