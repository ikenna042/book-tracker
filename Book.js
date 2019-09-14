class Book {
    constructor (title, author, pages, description, currentPage, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.description = description;
      this.currentPage = 1;
      this.read = false;
    }
    
    readBook(pageNumber) {
      if (pageNumber <= 0 || pageNumber > this.pages) {
        alert('Invalid page number!');
      } else {
        this.currentPage = pageNumber;
        if (pageNumber == this.pages) {
          this.read = true;
        }
      }
    }
  }
  
  export { Book };
  