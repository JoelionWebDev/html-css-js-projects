//CREATE A CLASS THAT CAN BE ESTANTIATE TO ADD BOOK
class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}


class UI {
  static displayBooks() {

    let books = Store.collectBook();

    books.forEach((book) => UI.addBookToList(book))
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list')

    const row = document.createElement('tr')

    row.innerHTML = `
    <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete text-danger">X</a></td>
    `
    list.appendChild(row)
  }

  static showAlert(message, className) {
    const div = document.createElement('div')
    div.className = `alert alert-${className}`
    div.appendChild(document.createTextNode(message))
    const container = document.querySelector('.container')
    const frm = document.querySelector('#book-form')
    container.insertBefore(div, frm)
    setTimeout(() => document.querySelector('.alert').remove(), 3000)
  }

  static removeBook(el) {
    if(el.classList.contains('delete')){
      if(confirm('are you sure you want to delete a book', 'danger')){
        el.parentElement.parentElement.remove()
          UI.showAlert('book removed', 'success')
      }
    }
    }

  static clearFilds() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }

}

class Store {
  //collectBooks form store
  static collectBook() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }
// add book to store
  static addBook(book) {
    const books = Store.collectBook();
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
  }
  //remove book from store
  static removeBookFromStore(isbn) {
    const books = Store.collectBook();
    books.forEach((book, index) => {
      if(book.isbn === isbn){
        books.splice(index, 1)
      }
    })
    localStorage.setItem('books', JSON.stringify(books))
  }
}

// display the hard coded arrays of books
document.addEventListener('DOMContentLoaded', UI.displayBooks)

const form = document.querySelector('#book-form').addEventListener('submit', (e) => {

  e.preventDefault();

  //get the input value of the tiltle author and isbn
  const title = document.getElementById('title').value
  const author = document.getElementById('author').value
  const isbn = document.getElementById('isbn').value

  //estanciate book from the book object above

  if(title === '' || author === '' || isbn ===''){
    UI.showAlert('fill in all fields', 'danger')
  } else {
    const book = new Book(title, author, isbn)
    //add book to UI
    UI.addBookToList(book)

    //add boo to store
    Store.addBook(book)


    UI.showAlert('congratulations, user is successfully added', 'success')
  }
  //clear filds
  UI.clearFilds()
  const filter = document.querySelector('.filter').addEventListener('keyup', (e) => {
    const text = e.target.value.toLowerCase()
    
  
    })
})

document.querySelector('.book-list').addEventListener('click', deleteBook)

function deleteBook(e){
//remove book form ui
  UI.removeBook(e.target)

  Store.removeBookFromStore(e.target.parentElement.previousElementSibling.innerText)

  //remove book form store

}

// const filter = document.querySelector('.filter').addEventListener('keyup', filt)

// function filt(e) {
//   const text = e.target.value.toLowerCase()
//   const item = document.querySelector('.book-list')
  
  
// }
