const {connectDB, mongoose} = require('../mongodb-data-layer-fundamentals-and-advanced-techniques-ChrispineOjow/db');
const {Book} = require('../mongodb-data-layer-fundamentals-and-advanced-techniques-ChrispineOjow/Models/books');

async function main(){
    await connectDB();

    // Query to Find all books in a specific genre
    // const genre = await Book.find({genre:"Fiction"}).select();
    // genre.length === 0 ? console.log("No books found in this genre") : console.log(genre); // Check if there is any book in that genre
    


    // Query to Find books published after a certain year
    // const yearPublished = await Book.find({published_year:{$gt:1937}});
    // yearPublished.length === 0 ? console.log("No books found published after this year") : console.log(yearPublished); // Check if there is any book published after that year
    
    

    //Query to Find books by a specific author
    // const author = await Book.find({author:"Herman Melville"});
    // author.length === 0 ? console.log("No books found by this author") : console.log(author); // Check if there is any author in the list by that name



    // Query to Update the price of a specific book
    // const updatedPrice = await Book.updateOne({title:"The Alchemist", author: "Paulo Coelho"}, {$set:{price: 10.99}});
    // console.log(`Price has been updated` );


    // //Query to Delete a book by its title
    // const deleteBook = await Book.deleteOne({title: "The Alchemist"});
    // console.log("Book has been deleted");



    //Query to to find books that are both in stock and published after 2010
    // const inStockAndPublishedAfter2010 = await Book.find({in_stock: true, published_year: {$gt:2010}});
    // if(inStockAndPublishedAfter2010.length === 0){
    //     console.log("No books found that are both in stock and published after 2010");
    // }else{
    //     console.log(inStockAndPublishedAfter2010);
    // }


    // //Query to Use projection to return only the title, author, and price fields in your queries
    // const book = await Book.find({}).select("title author price -_id");
    // console.log(book);



    // //Query Implementing sorting to display books by price in ascending order
    // const sortedBooksASC = await Book.find({}).sort({price:1});
    // console.log(sortedBooksASC);


    // //Query Implementing sorting to display books by price in descending order
    // const sortedBooksDSC = await Book.find({}).sort({price:-1});
    // console.log(sortedBooksDSC);



    // Query Implementing pagination to display 5 books per page
    // const page = 1;  // current page number (1-based)
    // const limit = 5; // number of books per page

    // const books = await Book.find()
    // .skip((page - 1) * limit)  // skip documents for previous pages
    // .limit(limit);             // limit results to 5 books

    // console.log(books);



    // Query to calculate the average price of books by genre
    // const avgPriceByGenre = await Book.aggregate([

    //     {
    //         $group: {
    //             _id: "$genre",
    //             averagePrice: { $avg: "$price" }
    //         }
    //     }
    // ])

    // console.log(avgPriceByGenre);



    //Query to find the author with the most books in the collection
    // const authorWithMostBooks = await Book.aggregate([

    //     {
    //         $group:{
    //             _id: "$author",
    //             bookCount: {$sum:1} // Count the number of books for each author
    //         },// Group by author
           
    //     }, 

    //     {
    //         $sort: {bookCount: -1} // Sort authors by book count in descending order
    //     },

    //     {
    //         $limit:1 // Limit the result to the top author
    //     }

    // ])

    // console.log(authorWithMostBooks);



    //Query that groups books by publication decade and counts them
    // const booksByDecade = await Book.aggregate([
    //     {
    //         $project: {
    //         decade: {
    //             $multiply: [
    //             { $floor: { $divide: ["$published_year", 10] } },
    //             10
    //             ] // Get the decade by dividing the year by 10, flooring it, and multiplying by 10
    //         }
    //         }// Project a new field "decade"
    //     },
    //     {
    //         $group: {
    //         _id: "$decade",
    //         count: { $sum: 1 }
    //         }
    //     },// Group by decade and count the number of books in each decade
    //     {
    //         $sort: { _id: 1 }
    //     }// Sort the results by decade in ascending order
    // ]);

    // console.log(booksByDecade);



    // Query to Create an index on the `title` field for faster searches
    

    await mongoose.disconnect();
}
main();
