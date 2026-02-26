const express = require('express');
const router = express.Router();

// Mock database for demonstration purposes
const users = [];

// Register route
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Check if the user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }
    // Save the new user
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check for the user
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    res.status(200).json({ message: 'Login successful' });
});

module.exports = router;