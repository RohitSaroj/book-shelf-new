import React from "react";
import { spawn } from "child_process";
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
        <div className="author-details d-inline-block">
          <div className="book-title ml-4">{bestBook.title}</div>
          <div className="author-name ml-5">- By {bestBook.author.name}</div>
          <div className="ratings-container">
            <span className="average-rating">
              Average rating: {details.average_rating}
            </span>
            <span className="rating-details">
              Rating Details &nbsp;.&nbsp; {details.ratings_count._} Ratings
              &nbsp;.&nbsp; {details.text_reviews_count._} Reviews
            </span>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BookDetails;
