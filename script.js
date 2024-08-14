class Book {
    constructor(author, title, pageAmount, hasRead) {
        this.author = author;
        this.title = title;
        this.pageAmount = pageAmount;
        this.hasRead = hasRead;
    }

    toggleReadStatus() {
        this.hasRead = !this.hasRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book)
    }

    removeBook(index) {
        this.books.splice(index, 1);
    }

    displayBooks(){
        const card = document.getElementById("card-container");
        card.innerHTML = '';

        this.books.forEach((book, index) => {
            const bookCard = document.createElement("div");
            const bookRemove = document.createElement("button");
            const bookChange = document.createElement("button");
            const bookButtons = document.createElement("div")

            bookCard.classList.add("book-card");
            bookRemove.classList.add("remove-book");
            bookChange.classList.add("read-status");
            bookButtons.classList.add("book-buttons");

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
                this.removeBook(index);
                this.displayBooks();
            });

            bookChange.addEventListener('click', () => {
                book.toggleReadStatus();
                const readStatusText = bookCard.querySelector('.read-status-text');
                readStatusText.innerHTML = `<strong>Read:</strong> ${book.hasRead ? 'Yes' : 'No'}`;
            });
        });
    }
}

const myLibrary = new Library();

const dialog = document.querySelector('dialog');
const showButton = document.getElementById('showDialog');
const closeButton = document.getElementById('close-dialog');
const submitButton = document.getElementById('submitButton');
const form = document.getElementById('new-book');

showButton.addEventListener('click', () => {
    dialog.showModal();
});

closeButton.addEventListener('click', () => {
    dialog.close();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    form.requestSubmit();
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const author = document.getElementById("author").value;
    const title = document.getElementById("title").value;
    const pageAmount = document.getElementById("page-amount").value;
    const hasRead = document.getElementById("has-read").checked;

    const newBook = new Book(author, title, pageAmount, hasRead);
    myLibrary.addBook(newBook);

    form.reset();
    dialog.close();

    myLibrary.displayBooks();
});