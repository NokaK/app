export const mapBooks = books => {
  return books.map(book => ({
    id: book.id,
    author: book.volumeInfo.authors[0],
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
    selfLink: book.selfLink,
    category: book.volumeInfo.categories[0],
    isFav: false
  }));
};

export const mapSingleBook = book => {
  return {
    id: book.id,
    author: book.volumeInfo.authors[0],
    title: book.volumeInfo.title,
    description: book.volumeInfo.description,
    publisher: book.volumeInfo.publisher,
    publishedDate: book.volumeInfo.publishedDate,
    imgUrl: book.volumeInfo.imageLinks['thumbnail'],
    category: book.volumeInfo.categories[0]
  };
};
