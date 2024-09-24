const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//DB config
const connectDB = require('./config/db');
connectDB();
    
app.get('/', (req,res) => {
    res.send('Hello World');
})

// Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts',posts)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})