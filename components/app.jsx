import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';


import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';

import BookDetailDescription from './book-detail-description';

import Search from './search';
import SearchResult from './search-result';
import NavBar from "./navbar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "searchResult": {},
            "currentBookDetail": null
        };
        this.performSearch = this.performSearch.bind(this);
        this.showBookDetail = this.showBookDetail.bind(this);
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
                    <Router>
                        <div>
                            <Route path="/book-detail" exact component={() => <BookDetailDescription bookDetail={this.currentBookDetail} />
                            } />
                        </div>
                    </Router>
                    <div id="overlay-inAbox" className="overlay"></div>
                    <Search performSearch={this.performSearch} />
                    <SearchResult result={result} showBookDetail = {this.showBookDetail} />
                </div>
            </React.Fragment>
        );
    }
    showOverlay() {
        window.openOverlay('overlay-inAbox');
        this.setState({ loaded: false });
    }
    hideOverlay() {
        window.closeOverlay('overlay-inAbox');
        this.setState({ loaded: true });
    }
    performSearch(text) {
        this.showOverlay();
        const args = {
            data: {
                text: text
            },
            header: {
                'Content-Type': 'application/json',
            }
        };
        request.post('/', args, (err, data) => {
            this.hideOverlay();
            if (err) {
                console.error(err);
                return;
            }
            this.setState({
                "searchResult": data.body
            });
        });
    }

    showBookDetail(bookId) {
        this.showOverlay();
        const args = {
            header: {
                'Content-Type': 'application/json',
            }
        };
        request.get(`/${bookId}`, args, (err, data) => {
            this.hideOverlay();
            if (err) {
                console.error(err);
                return;
            }
            this.setState({
                "bookDetail": data.body
            });
        });
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);