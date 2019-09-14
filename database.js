import { Book } from './Book.js';
  
  let firstBook = new Book('Things Fall Apart',
                           'Chinua Achebe', 500,
                           'About things that are falling apart'
                          );

  let secondBook = new Book('There was a Country',
                           'Achebe Chinua', 200,
                           'About There was a Country'
                          );

  let thirdBook = new Book('Rich dad',
                           'Robert', 850,
                           'About Rich dad'
                          );

  let fourthBook = new Book('Poor Dad',
                           'Kiyosaki', 670,
                           'About Poor Dad'
                          );

  let bookList = [firstBook, secondBook, thirdBook, fourthBook];

export { bookList };