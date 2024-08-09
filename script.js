const myLibrary = [];

function Book(author, title, pageAmount, hasRead) {
    this.author = author;
    this.title = title;
    this.pageAmount = pageAmount;
    this.hasRead = hasRead;
}

function addBookToLibrary(author, title, pageAmount, hasRead) {
  addedBook = new Book(author, title, pageAmount, hasRead);

  myLibrary.push(addedBook);
  console.log(myLibrary);
}

function addBookCard() {
    const card = document.getElementById("card-container");

    
    card.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        const bookRemove = document.createElement('button');
        const bookChange = document.createElement('button');
        const bookButtons = document.createElement('div');

        bookCard.classList.add('book-card');
        bookRemove.classList.add('remove-book');
        bookChange.classList.add('read-status');
        bookButtons.classList.add('book-buttons');

        bookCard.innerHTML = `
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Title:</strong> ${book.title}</p>
            <p><strong>Pages:</strong> ${book.pageAmount}</p>
            <p class="read-status-text"><strong>Read:</strong> ${book.hasRead ? 'Yes' : 'No'}</p>
        `;

        bookRemove.innerHTML = 'Remove';
        bookChange.innerHTML = 'Read/Unread';

        
        bookButtons.appendChild(bookRemove);
        bookButtons.appendChild(bookChange);
        bookCard.appendChild(bookButtons);
        card.appendChild(bookCard);

        
        bookRemove.addEventListener('click', () => {
            removeBook(index);
        });

        bookChange.addEventListener('click', () => {
            toggleReadStatus(book, bookCard);
        });
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    addBookCard(); 
}

function toggleReadStatus(book, bookCard) {
    book.hasRead = !book.hasRead; 
    const readStatusText = bookCard.querySelector('.read-status-text');
    readStatusText.innerHTML = `<strong>Read:</strong> ${book.hasRead ? 'Yes' : 'No'}`; // Update the text
}



const dialog = document.querySelector("dialog");
const showButton = document.getElementById("showDialog");
const closeButton = document.getElementById("close-dialog");
const submitButton = document.getElementById("submitButton");
const form = document.getElementById("new-book")

// "Show the dialog" button opens the dialog modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pageAmount = document.getElementById("page-amount").value;
    const hasRead = document.getElementById("has-read").checked;

    console.log("Author:", author);
    console.log("Title:", title);
    console.log("Page Amount:", pageAmount);
    console.log("Has Read:", hasRead);

    addBookToLibrary(author, title, pageAmount, hasRead);

    form.reset();
    dialog.close();

    addBookCard();

});


