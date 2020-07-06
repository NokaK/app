export const mapBooks = books => {
  return books.map(book => {
    return {
      id: book.id,
      author: book.volumeInfo.authors[0],
      title: book.volumeInfo.title,
      description: book.volumeInfo.description,
      selfLink: book.selfLink,
      isFav: false
    };
  });
};
