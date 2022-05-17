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

function addBookToLibrary(title, author, numberofPages, readStatus) {
  const newBook = new Book(title, author, numberofPages, readStatus);
  myLibrary.push(newBook);
}

console.log(myLibrary);
addBookToLibrary("BOOK", "henry", 213, true);
console.log(myLibrary);

// console.log(myLibrary);

// console.log(theHobbit.toString());
