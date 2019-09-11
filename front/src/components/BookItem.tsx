import React from "react";

type AuthorProps = {
  name: string;
  id: string;
};

type BookItemProps = {
  id: string;
  name: string;
  author: AuthorProps;
  genre: string;
};

const BookItem: React.FC<BookItemProps> = ({ name, author, genre }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>{author.name}</h3>
      <p>{genre}</p>
    </div>
  );
};

export default BookItem;
