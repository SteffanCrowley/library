const main = document.querySelector(".main");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pageCount = document.querySelector("#page");

const submitBtn = document.querySelector(".submit");
const closeBtn = document.querySelector(".close");

let myLibrary = [];

//constructor function for making new book entries
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
  console.log(myLibrary);
}

//function that draws the current board by iterating through
//the current library array
function submitBook(myLibrary) {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    let p;
    let closeBtn;
    //creates card
    let div = document.createElement("div");
    div.classList.add(`card`);
    main.appendChild(div);

    //Adds title to card
    p = document.createElement("p");
    p.classList.add("title");
    p.textContent = myLibrary[i].title;
    div.appendChild(p);

    //Adds author to card
    p = document.createElement("p");
    p.classList.add("author");
    p.textContent = myLibrary[i].author;
    div.appendChild(p);

    //Adds page count to card
    p = document.createElement("p");
    p.classList.add("page");
    p.textContent = myLibrary[i].numberofPages;
    div.appendChild(p);

    //Adds read status to card
    p = document.createElement("p");
    p.classList.add("page");
    p.textContent = myLibrary[i].readStatus;
    div.appendChild(p);

    //Adds close button to card
    closeBtn = document.createElement("button");
    closeBtn.classList.add("close");
    closeBtn.textContent = "x";
    div.appendChild(closeBtn);

    //engage event listener for close button
    closeBtn.addEventListener("click", (event) => {
      main.removeChild(div);
    });
  }
}

// submitBook(myLibrary);

//add event lister to the submit button, when it gets hit, it takes
//the form inputs and puts them in the library via addBookToLibrary()
//it then runs submitBook and prints it on the page

submitBtn.addEventListener("click", (event) => {
  addBookToLibrary(title.value, author.value, pageCount.value, "NEW");
  submitBook(myLibrary);
});
