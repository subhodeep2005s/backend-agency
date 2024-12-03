const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config();
mongoose.set('strictQuery', false);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
// resposne
app.get('/lol', (req, res) => {
  res.send('Hello World');
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(chalk.blue.bgRed.bold('MongoDB connected successfully')))
.catch(err => console.log(chalk.red.bold('MongoDB connection error:', err)));

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(chalk.yellow(`Server running on port ${PORT}`)));

