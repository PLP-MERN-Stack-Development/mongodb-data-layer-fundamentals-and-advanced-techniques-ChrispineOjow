const {mongoose} = require('../db'); // Import the modules that were exported at db.js
const {Schema} = mongoose; // Destructure Schema from mongoose

const bookSchema = new Schema({
    
    title: String,
    author: String,
    genre: String,
    published_year: Number,
    price: Number,
    in_stock: Boolean,
    pages: Number,
    publisher: String
});

const Book = mongoose.model('Book', bookSchema); 


module.exports = {Book};