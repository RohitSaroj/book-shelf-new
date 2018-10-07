import request from 'superagent';
import React from 'react';
import ReactDOM from 'react-dom';

import Search from './search';

class App extends React.Component {
    constructor(props){
        super(props);
        this.performSearch = this.performSearch.bind(this);
    }
    render() {
        return (
            <div className="parent-container container good-reads-search-container">
                <Search performSearch={this.performSearch} />
                <div className="search-result"></div>
            </div>
        );
    }
    performSearch(text) {
        const args = {
            data: {
                text: text
            },
            header: {
                'Content-Type': 'application/json',
            }
        };
        request.post('/', args, (err, data) => {
            this.setState({
                "searchResult": data.body
            });
        });
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);