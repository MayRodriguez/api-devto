const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected to DB');
    }catch(error){
        console.log(`error connecting to db ${error}`);
    };
};

module.exports = connectDB;
