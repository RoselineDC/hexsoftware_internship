const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const PORT = 5000;

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

// CSV Writer setup
const csvWriter = createObjectCsvWriter({
    path: 'form_data.csv', // File to save data
    header: [
        { id: 'fullName', title: 'Full Name' },
        { id: 'phoneNumber', title: 'Phone Number' },
        { id: 'email', title: 'Email' },
        { id: 'subject', title: 'Subject' },
        { id: 'message', title: 'Message' },
    ],
    append: true, // Append data to the file instead of overwriting
});

// Handle form submission
app.post('/save-form', (req, res) => {
    const formData = req.body;

    // Append the new form data to the CSV file
    csvWriter
        .writeRecords([formData])
        .then(() => {
            console.log('Form data saved to CSV file');
            res.json({ message: 'Data saved successfully!' });
        })
        .catch((error) => {
            console.error('Error saving to CSV:', error);
            res.status(500).json({ message: 'Failed to save data.' });
        });
});

// Serve the form (optional)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));  // Serve your HTML form
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
