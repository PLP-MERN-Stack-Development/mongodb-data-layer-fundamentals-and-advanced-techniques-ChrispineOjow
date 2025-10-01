const {mongoose} = require('mongoose');// Import mongoose
require('dotenv').config();

async function connectDB(){

    try{

        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Database connection was successful');

    }catch(error){

        console.log("the error is:", error);
        console.log('Database connection failed');
    }
};

module.exports = {connectDB, mongoose};