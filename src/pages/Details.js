import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { mapSingleBook } from '../utils/mapBooks';
import useSWR from 'swr';
import { AnimatePresence, motion } from 'framer-motion';

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
        ''
      ) : error ? (
        <p>error loading this book ...</p>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div style={{ width: 140, height: 190, background: '#f4f4f4' }} />
            {/* <img src={data.imgUrl} height={190} alt="" /> */}
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
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Details;
