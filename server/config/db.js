const mongoose = require("mongoose");
const dotenv=require('dotenv');

dotenv.config({path:'./default.env'})

const db = process.env.mongoURI

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: { w: 'majority' },
      useCreateIndex: true,
      useFindAndModify:false
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
