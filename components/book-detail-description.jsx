import React from "react";

class BookDetailDescription extends React.Component {
  render() {
    const bookDetail = this.props.bookDetail;
    return (
      <div className="book-details row" id={bookDetail.id}>
        <div className="col-1">
          <button
            className="btn btn-outline-primary mt-3"
            onClick={this.props.returnToSearch}
          >
            Back
          </button>
        </div>
        <div className="col-3">
          <img className="book-image mt-3 ml-2" src={bookDetail.image_url} />
        </div>
        <div className="col-8 mt-3">
          <div className="author-details d-inline-block">
            <h3 className="book-title ml-4 text-dark font-weight-bold">
              {bookDetail.title}
            </h3>
            <div className="author-name ml-4 font-weight-bold text-secondary">
              by {bookDetail.authors.author.name}
            </div>
            <div className="ratings-container ml-4 mt-1">
              <span className="average-rating lead">
                Average rating: {bookDetail.average_rating}
              </span>
              <span className="vertical-pipe-separator lead"> | </span>
              <span className="rating-details text-info lead">
                &nbsp;Rating Details &nbsp;.&nbsp; {bookDetail.ratings_count}{" "}
                Ratings &nbsp;.&nbsp; {bookDetail.text_reviews_count} Reviews
              </span>
            </div>
            <div
              className="book-description ml-4 mt-2"
              dangerouslySetInnerHTML={{ __html: bookDetail.description }}
            />
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BookDetailDescription;
