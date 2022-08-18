import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Book from '../components/Book';
import FormAdd from '../components/FormAdd';
import { fetchBook } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
      {books.map((book) => (
        <Book key={book.item_id} id={book.item_id} title={book.title} author={book.author} />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
