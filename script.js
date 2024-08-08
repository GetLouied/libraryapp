/*** TODO ***
 * Create a Button to add a New Book to the application
 * Create button functionality upon click to open a modal
 * After user submits input for new book, save data in variables
 * input the variables into addBookToLibrary, that creates a new object and adds to array
 * Each time book is added, run addBookToLibrary first, then loop through array and add card display for the book. 
 * Add a button on each display to remove a book from the display
 * Add a button on each display to change if they have read the book. 
*************/

const myLibrary = [];

function Book(author, title, pageAmount, hasRead) {
    this.author = author;
    this.title = title;
    this.pageAmount = pageAmount;
    this.hasRead = hasRead;
  
}

function addBookToLibrary(Book) {
  myLibrary.push(Book)
}
