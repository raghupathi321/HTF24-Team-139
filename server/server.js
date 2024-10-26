// server/server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000; // Change to 5000 to avoid conflict with React's default port

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to get spending data
app.get('/api/spending', (req, res) => {
    // Read data from the JSON file
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read data' });
        }
        res.json(JSON.parse(data));
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
