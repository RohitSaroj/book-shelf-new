import React from "react";
import BookDetails from "./book-details";

class SearchResult extends React.Component {
  render() {
    return <div className="search-result-container">{this.renderBooks()}</div>;
  }
  renderBooks() {
    const rows = [];
    let count;
    const bookDetails = this.props.result;
    const numrows = bookDetails.length;
    for (count = 0; count < numrows; count++) {
      rows.push(<BookDetails key={count} detail={bookDetails[count]}  showBookDetail={this.props.showBookDetail}/>);
    }
    return (
      <div className="list-group">{rows}</div>
    );
  }
}

module.exports = SearchResult;
