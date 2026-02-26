const express = require('express');
const router = express.Router();

// Mock database (you can replace this with a real one)
let services = [];

// Create a service
router.post('/services', (req, res) => {
    const service = { id: services.length + 1, data: req.body };
    services.push(service);
    res.status(201).json(service);
});

// Get all services
router.get('/services', (req, res) => {
    res.json(services);
});

// Get a specific service by ID
router.get('/services/:id', (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));
    if (!service) return res.status(404).send('Service not found');
    res.json(service);
});

// Update a specific service by ID
router.put('/services/:id', (req, res) => {
    const service = services.find(s => s.id === parseInt(req.params.id));
    if (!service) return res.status(404).send('Service not found');
    service.data = req.body;
    res.json(service);
});

// Delete a specific service by ID
router.delete('/services/:id', (req, res) => {
    const serviceIndex = services.findIndex(s => s.id === parseInt(req.params.id));
    if (serviceIndex === -1) return res.status(404).send('Service not found');
    services.splice(serviceIndex, 1);
    res.status(204).send();
});

module.exports = router;
