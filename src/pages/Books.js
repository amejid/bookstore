import Book from '../components/Book';
import FormAdd from '../components/FormAdd';

const Books = () => {
  const books = [
    { id: 'b1', title: 'Javascript Mastery', author: 'Naol' },
    { id: 'b2', title: 'Spring Advanced', author: 'Muhe' },
  ];

  return (
    <>
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <FormAdd />
    </>
  );
};

export default Books;
