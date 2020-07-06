import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { mapSingleBook } from '../utils/mapBooks';

const Details = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const { data } = await Axios.get(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );

      setBook(mapSingleBook(data));
    }
    fetchData();
  }, [id]);
  // console.log(book);

  return (
    <div className="container">
      {book.imgUrl && <img src={book.imgUrl} alt="" />}
      <h3>{book.title}</h3>
      <p>
        <b>Author:</b> {book.author}
      </p>
      <p>
        <b>Year:</b> {book.publishedDate}
      </p>
      <p>
        <b>Publisher:</b> {book.publisher}
      </p>
      <div>
        <b>Summary: </b>
        <span dangerouslySetInnerHTML={{ __html: book.description }} />
      </div>
    </div>
  );
};

export default Details;
