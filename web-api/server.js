require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

// try {
//     mongoose.connect(DB_CONNECTION_STRING)
//     console.log("DB connected");
// } catch (error) {
//     console.error("Error connecting to DB:", error);
    
// }
    
app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});