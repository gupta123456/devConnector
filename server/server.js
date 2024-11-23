const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const express= require('express');
const morgan = require('morgan');
const cors =require('cors')
const cookieParser=require('cookie-parser')

const app = express();

// Connect Database
connectDB();

const allowedOrigins = ['http://localhost:3000'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true               
  };
 
  
// middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser());
app.use(cors(corsOptions));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
