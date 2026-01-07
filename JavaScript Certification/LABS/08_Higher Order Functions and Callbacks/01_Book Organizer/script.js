const books = [
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    authorName: "Douglas Adams",
    releaseYear: 1979,
  },
  {
    title: "1984",
    authorName: "George Orwell",
    releaseYear: 1949,
  },
  {
    title:
      "Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON",
    authorName: "Lindsay Bassett",
    releaseYear: 2015,
  },
];

const sortByYear = (leftBook, rightBook) => {
  if (leftBook.releaseYear < rightBook.releaseYear) {
    return -1;
  }

  if (leftBook.releaseYear > rightBook.releaseYear) {
    return 1;
  }

  return 0;
};

const filteredBooks = books.filter((book) => book.releaseYear <= 1950);

filteredBooks.sort(sortByYear);
