const container = document.querySelector(".container");
let myLibrary = [];

function Book(title, author, numberofPages, readStatus) {
  this.title = title;
  this.author = author;
  this.numberofPages = numberofPages;
  this.readStatus = readStatus;
  this.info = function () {
    console.log(
      title + " by " + author + ", " + numberofPages + ", " + readStatus
    );
  };
}

//function that uses book constructor to create new book and then adds
//it to the library array
function addBookToLibrary(title, author, numberofPages, readStatus) {
  const newBook = new Book(title, author, numberofPages, readStatus);
  myLibrary.push(newBook);
}

//function that draws the current board by iterating through
//the current library array
function submitBook(myLibrary) {
  for (let i = 0; i < myLibrary.length, i++; ) {
    let p = document.createElement("p");
    p.textContent = "party time";
  }
}

console.log(myLibrary);
addBookToLibrary("BOOK", "henry", 213, true);
console.log(myLibrary);

// console.log(myLibrary);

// console.log(theHobbit.toString());

let div = document.createElement("div");
div.textContent = "party time";
container.appendChild(div);
