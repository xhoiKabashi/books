const btn = document.querySelector(".btn");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");


const myLibrary = [];




// display form

const displayForm = function () {
    form.setAttribute("id", "form");
};
btn.addEventListener("click", displayForm);


// constructor to add new books

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// adding new books


function addBookToLibrary() {
    const newTitle = document.querySelector(".title").value;
    const newAuthor = document.querySelector(".author").value;
    const newPages = document.querySelector(".pages").value;
    const newBook = new Book(newTitle, newAuthor, newPages);
    myLibrary.push(newBook);
}
console.log(myLibrary)

document.querySelector(".form").addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary();
    showBook();
});

    function showBook(){
        const screen = document.querySelector(".screen");
        screen.innerHTML = "";
        
        myLibrary.forEach(element =>{
            let book = element;
            let bookCards = document.createElement("div");
            console.log(book.title);
            bookCards.innerHTML = `<h4>Title: ${book.title}</h4>
            <h4>Author: ${book.author}</h4>
            <h4>Pages: ${book.pages}</h4>`

    screen.appendChild(bookCards)
    }

    )}


// renderBook();