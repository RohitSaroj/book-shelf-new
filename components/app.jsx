import request from "superagent";
import React from "react";
import ReactDOM from "react-dom";

import Search from "./search";
import SearchResult from "./search-result";
import NavBar from "./navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
    };
    this.performSearch = this.performSearch.bind(this);
  }
  render() {
    let result = [];
    const searchResult = this.state.searchResult;
    if (searchResult && searchResult.results && searchResult.results.work) {
      result = searchResult.results.work;
    }
    return (
      <React.Fragment>
        <NavBar />
        <div className="parent-container container good-reads-search-container">
          <Search performSearch={this.performSearch} />
          <SearchResult result={result} />
        </div>
      </React.Fragment>
    );
  }
  performSearch(text) {
    const args = {
      data: {
        text: text
      },
      header: {
        "Content-Type": "application/json"
      }
    };
    request.post("/", args, (err, data) => {
      this.setState({
        searchResult: data.body
      });
    });
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
