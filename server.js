const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')
const auth = require('./routes/api/auth')

const app = express();

//Body Parser
app.use(express.json({ extended: false }));

//DB config
const connectDB = require('./config/db');
connectDB();
    
app.get('/', (req,res) => {
    res.send('Hello World');
})

// Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)
app.use('/api/auth',auth)

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})