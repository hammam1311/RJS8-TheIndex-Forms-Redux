import React from "react";

const BookRow = ({ book }) => (
  <tr>
    <td>{book.title}</td>
    <td>
      {book.authors.map(author => (
        <div key={author.id}>{author.name}</div>
      ))}
    </td>
    <td>
      <button className="btn" style={{ backgroundColor: book.color }} />
    </td>
  </tr>
);

export default BookRow;
