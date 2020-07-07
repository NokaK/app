import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { mapSingleBook } from '../utils/mapBooks';
import useSWR from 'swr';

const Details = () => {
  const { id } = useParams();

  const fetcher = url => axios.get(url).then(res => mapSingleBook(res.data));
  const { data, error } = useSWR(
    `https://www.googleapis.com/books/v1/volumes/${id}`,
    fetcher
  );

  return (
    <div className="container">
      {!data ? (
        <p>fetching...</p>
      ) : error ? (
        <p>error Loading this book</p>
      ) : (
        <>
          {data.imgUrl && <img src={data.imgUrl} alt="" />}
          <h3>{data.title}</h3>
          <p>
            <b>Author:</b> {data.author}
          </p>
          <p>
            <b>Category:</b> {data.category}
          </p>
          <p>
            <b>Year:</b> {data.publishedDate}
          </p>
          <p>
            <b>Publisher:</b> {data.publisher}
          </p>
          <div>
            <b>Summary: </b>
            <span dangerouslySetInnerHTML={{ __html: data.description }} />
          </div>
        </>
      )}
    </div>
  );
};

export default Details;
