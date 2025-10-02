# MongoDB Fundamentals - Week 1

## Setup Instructions

Before you begin this assignment, please make sure you have the following installed:

1. **MongoDB Community Edition** - [Installation Guide](https://www.mongodb.com/docs/manual/administration/install-community/)
2. **MongoDB Shell (mongosh)** - This is included with MongoDB Community Edition
3. **Node.js** - [Download here](https://nodejs.org/)


### Node.js Package Setup

Once you have Node.js installed, run the following commands in your assignment directory:

```bash
# Install dependencies (including mongoose and dotenv)
npm install
```

> **Note:** This project uses `mongoose` for MongoDB object modeling and `dotenv` for environment variable management. Both are already listed in `package.json`.

### Environment Variables

Create a `.env` file in the root directory and add your MongoDB connection string:

```env
MONGODB_URI=mongodb://localhost:27017/your-databasename
```

You can change the database name or use your own MongoDB Atlas URI if desired.

---

## How to Run the Scripts

### 1. Insert Sample Book Data

This script will populate your MongoDB database with sample book data:

```bash
node insert_books.js
```

You should see output confirming the books were inserted.

### 2. Run Query Examples

The `queries.js` script contains various example queries using Mongoose. To run it:

```bash
node queries.js
```

You can uncomment different queries in `queries.js` to test various MongoDB operations (find, update, delete, aggregate, etc.).

---

## Assignment Overview

This week focuses on MongoDB fundamentals including:
- Creating and connecting to MongoDB databases
- CRUD operations (Create, Read, Update, Delete)
- MongoDB queries and filters
- Aggregation pipelines
- Indexing for performance

## Submission

Complete all the exercises in this assignment and push your code to GitHub using the provided GitHub Classroom link.


## Getting Started (Summary)

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Create a `.env` file with your MongoDB URI
5. Run `npm install` to install dependencies
6. Run `node insert_books.js` to populate your database
7. Run `node queries.js` to try out query examples
8. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 