
const Client = require('node-rest-client').Client;
const client = new Client();
const searchBook = (text) => {
    return new Promise((resolve, reject) => {
        const url = `${process.env.GOOD_READ_URI}${process.env.GOOD_READ_SEARCH_URI}?key=${process.env.GOOD_READ_DEVELOPER_KEY}&q=${text}`;
        const args = {

        };
        client.get(url, args, (data, response) => {
            if (Number(response.statusCode) === 200) {
                resolve((data));
            } else {
                console.error(err);
                reject(new Error("Error in good read api"));

            }
        });
    });
}

const bookDetail = (bookId) => {
    return new Promise((resolve, reject) => {
        const url = `${process.env.GOOD_READ_URI}${process.env.GOOD_READ_BOOK_DETAIL}?key=${process.env.GOOD_READ_DEVELOPER_KEY}&id=${bookId}`;
        console.log(url);
        client.get(url, {}, (data, response) => {
            if (Number(response.statusCode) === 200) {
                resolve(data);
            } else {
                console.error(err);
                reject(new Error("Error in good read api"));

            }
        });
    });
}
module.exports = {
    searchBook,
    bookDetail
}