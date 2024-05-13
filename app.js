const addBook = document.querySelector("#addBook");
const library = document.querySelector(".library");
const nevermind = document.getElementById("no");
const info = document.getElementById("bookInfo");
const add = document.getElementById("yes");
const myLibrary = [];
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readIt = document.getElementById("readit");

addBook.addEventListener("click", (e) => {
    info.style.display = "flex";
});

class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class addBookToLibrary{
    constructor(){
        const book = new Book(title.value, author.value, pages.value, readIt.checked);
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "books");
        library.appendChild(bookContainer);
        const bookTitle = document.createElement("div");
        bookTitle.setAttribute("id", "bookTitle");
        bookTitle.textContent = book.title;
        bookContainer.appendChild(bookTitle);
        const bookAuthor = document.createElement("div");
        bookAuthor.setAttribute("id", "bookAuthor");
        bookAuthor.textContent = "By: " + book.author;
        bookContainer.appendChild(bookAuthor);
        const bookPage = document.createElement("div");
        bookPage.setAttribute("id", "bookPages");
        bookPage.textContent = book.pages + " Pages";
        bookContainer.appendChild(bookPage);
        const bookRead = document.createElement("button");
        bookRead.setAttribute("id", "bookRead");
        bookContainer.appendChild(bookRead);
        if(book.read){
            bookRead.textContent = "Read It";
        } else if (!book.read){
            bookRead.textContent = "Not Read It";
            bookRead.style.backgroundColor = "#800000";
        }
        bookRead.addEventListener("click", (e) =>{
            if(bookRead.textContent == "Read It"){
                bookRead.textContent = "Not Read It";
                bookRead.style.backgroundColor = "#800000";
            }else {
                bookRead.textContent = "Read It";
                bookRead.style.backgroundColor = "#013220";
            }
        });
        const bookDelete = document.createElement("button");
        bookDelete.setAttribute("id", "delete");
        bookContainer.appendChild(bookDelete);
        bookDelete.textContent = "Delete";
        bookDelete.addEventListener("click", (e) => {
            bookDelete.parentElement.remove();
        });
        myLibrary.push(book); 
    }
}

let titleBool = false;
let authorBool = false;
let pageBool = false;

title.addEventListener('input', (event) => {
    if(title.validity.tooShort){
        title.setCustomValidity('Your Title Should Be More Than One Character Long!');
    }else {
        title.setCustomValidity('');
        titleBool = true;
    }
    title.reportValidity();
});

author.addEventListener('input', (event) => {
    if(author.validity.tooShort){
        author.setCustomValidity('Your Author Name Should Be More Than One Character Long!');
    }else {
        title.setCustomValidity('');
        authorBool = true;
    }
    author.reportValidity();
});

pages.addEventListener('input', (event) => {
    if(pages.validity.rangeUnderflow){
        pages.setCustomValidity('Your Pages Should Be More Than 0!');
    }else {
        title.setCustomValidity('');
        pageBool = true;
    }
    pages.reportValidity();
});


add.addEventListener("click", (e) => {
    if(titleBool && authorBool && pageBool){
        e.preventDefault();
        let book = new addBookToLibrary();
        info.style.display = "none";
        titleBool = false; authorBool = false; pageBool = false;
    }
});

nevermind.addEventListener("click", (e) => {
    e.preventDefault();
    info.style.display = "none";
});