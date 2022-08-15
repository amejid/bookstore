import { useSelector } from 'react-redux';

import Book from '../components/Book';
import FormAdd from '../components/FormAdd';

const Books = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} id={book.id} title={book.title} author={book.author} />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
