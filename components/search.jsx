import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.onSearch = this.onSearch.bind(this);
    }
    render() {
        return (
            <div className="search-container">
                <div clasName="search-box">
                    <label for="searchBook" class="search-book-label">Search Book</label>
                    <input type="text" className="serach-input" id="searchBook" ref={(child) => { this.searchBook = child; }} ></input>
                    <input type="button" className="search-button" value = "Search" onClick={this.onSearch}></input>
                </div>
            </div>
        )
    }

    onSearch() {
        const searchText = this.searchBook.value;
        if (searchText){
            this.props.performSearch(searchText);
        }
    }
}

module.exports = Search;