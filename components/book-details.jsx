import React from "react";
//import "./../css/book-shelf.css";

class BookDetails extends React.Component {
  render() {
    const details = this.props.detail;
    const bestBook = details.best_book;
    return (
      <div
        className="book-details-container list-group-item list-group-item-action"
        id={bestBook.id._}
      >
        <img className="book-image" src={bestBook.small_image_url} />
        <span className="book-title m-4">{bestBook.title}</span>
        <span className="author-deatils">
          <span className={bestBook.author.name} />
        </span>
      </div>
    );
  }
}

module.exports = BookDetails;
