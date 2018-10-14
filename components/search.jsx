import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      isEmptySearch: false
    };
  }
  render() {
    const showError = () => {
      if (this.state.isEmptySearch) {
        return (
          <div className="no-search-error">Please enter text to search.</div>
        )
      }
      return (<div></div>)
    }
    return (
      <div className="search-container w-50 mx-auto">
        <div className="search-box w-100">
          <label for="searchBook" className="search-book-label">
            Search Book
          </label>
          <input
            type="text"
            className="serach-input ml-3"
            id="searchBook"
            ref={child => {
              this.searchBook = child;
            }}
          />
          <input
            type="button"
            className="search-button"
            value="Search"
            onClick={this.onSearch}
          />
        </div>
        {showError()}
      </div>
    );
  }

  onSearch() {
    const searchText = this.searchBook.value;
    this.setState({
      "isEmptySearch": searchText ? false : true
    });
    this.props.performSearch(searchText);
  }
}

module.exports = Search;
