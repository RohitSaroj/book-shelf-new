import React from "react";

class BookDetailDescription extends React.Component {
    render() {
        const bookDetail = this.props.bookDetail;
        return (
            <div className="book-details-container list-group-item list-group-item-action"
                id={bookDetail.id}>
                <img className="book-image" src={bookDetail.image_url} />
                <div className="author-details d-inline-block">
                    <div className="book-title ml-4">{bookDetail.title}</div>
                    <div className="book-description ml-4" dangerouslySetInnerHTML={{ __html: bookDetail.description }}></div>
                    {/* <div className="author-name ml-5">- By {bookDetail.author.name}</div> */}
                    <div className="ratings-container">
                        <span className="average-rating">
                            Average rating: {bookDetail.average_rating}
                        </span>
                        <span className="rating-details">
                            Rating Details &nbsp;.&nbsp; {bookDetail.ratings_count} Ratings &nbsp;.&nbsp; {bookDetail.text_reviews_count} Reviews
                        </span>
                    </div>
                </div>
                <button onClick={this.props.returnToSearch}>Return</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = BookDetailDescription;
