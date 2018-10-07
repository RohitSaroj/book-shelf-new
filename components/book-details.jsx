import React from 'react';

class BookDetails extends React.Component {
    render() {
        const details = this.props.detail;
        const bestBook = details.best_book;
        return (
            <div className="book-details-container" id={bestBook.id}>
                <div className="book-title">{bestBook.title}</div>
                <image className="book-image" src={bestBook.small_image_url} />
                <div className="auther-deatils">
                    <div className={bestBook.author.name} />
                </div>
            </div>
        );
    }
}

module.exports = BookDetails;