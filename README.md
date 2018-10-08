# Book-Shelf
This project is created to show book reviews using `GOOD READ API`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* [NPM](https://www.npmjs.com/get-npm) - Worlds largest open source repository
* [yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) - It caches every package it downloads so it never needs to download it again. It also parallelizes operations to maximize resource utilization so install times are faster than ever.

### Technology used
* [ExpressJs](https://expressjs.com/) - Express provides a thin layer of fundamental web application features, without obscuring Node.js features 
* [ReactJs](https://reactjs.org/) - React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

### Installing

Run following command:
* `npm run build-project` - To install project dependcy and build project
* `npm start` - To start project (now go to browser and go to http://localhost:3000 to run project)

### Environment Variables

.env file contains environment variable. Replace value of GOOD_READ_DEVELOPER_KEY with developer key value provide by `GOOD READ`.

* PORT = 3000
* GOOD_READ_DEVELOPER_KEY = `<Good Read developer key>`
* GOOD_READ_URI = https://www.goodreads.com/
* GOOD_READ_SEARCH_URI = search/index.xml
* GOOD_READ_BOOK_DETAIL = book/show.xml

### API 

* [Good Read API](https://www.goodreads.com/api/index) - It contains all API provided by GoodRead
* [Search Books](https://www.goodreads.com/api/index#search.books) - API to search books as per string passed
* [Book Review](https://www.goodreads.com/api/index#book.show) - API to fetch particular book review.


## Built With

* [Webapack](https://webpack.js.org/concepts/) - It is a static module bundler for modern Javascript applications


## License

This project is licensed under the MIT License - see the [LICENSE.md](https://opensource.org/licenses/MIT) file for details


