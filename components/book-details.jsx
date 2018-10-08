import React from "react";

class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.showDetailDescription = this.showDetailDescription.bind(this);
  }
  render() {
    const details = this.props.detail;
    const bestBook = details.best_book;
    return (
      <div
        className="book-details-container list-group-item list-group-item-action"
        id={bestBook.id._}
        onClick={this.showDetailDescription}
        ref={child => {
          this.bookDetail = child;
        }}
      >
        <img className="book-image" src={bestBook.small_image_url} />
        <div className="author-details d-inline-block align-top">
          <div className="book-title ml-4">{bestBook.title}</div>
          <div className="author-name ml-5">- By {bestBook.author.name}</div>
          <div className="ratings-container ml-5">
            <span className="average-rating">
              Average rating: {details.average_rating}
            </span>
            <span className="rating-details">
              &nbsp;Rating Details &nbsp;.&nbsp; {details.ratings_count._}{" "}
              Ratings &nbsp;.&nbsp; {details.text_reviews_count._} Reviews
            </span>
          </div>
        </div>
      </div>
    );
  }
  showDetailDescription() {
    var id = this.bookDetail.id;

    this.props.showBookDetail(id);
  }
}

module.exports = BookDetails;
