describe("Good Read API integration,", () => {
    const GoodReadAPI = require('../../api/good-read');
    it("should function to search book and get book details,", () => {
        expect(GoodReadAPI.searchBook).toBeDefined();
        expect(GoodReadAPI.bookDetail).toBeDefined();
    });

    describe("searchBook funtion, ", () => {
        const underTest = GoodReadAPI.searchBook
        it("should be an function.", () => {
            expect(typeof underTest).toBe('function');
        });
        it("should return a promise.", () => {
            const goodRead = underTest().catch(() => { });
            expect(typeof goodRead.then).toBe('function');
            expect(typeof goodRead.catch).toBe('function');
        });
        it("should throw an error if a search text is not provided.", (done) => {
            underTest()
                .then(done.fail)
                .catch(err => {
                    expect(err.message).toBe('Provide search text');
                    done();
                });
        });
        describe("if search text is passed,", () => {
            it('should return Error if Environment variable not defined', (done) => {
                process.env.GOOD_READ_URI = "";
                process.env.GOOD_READ_SEARCH_URI = "";
                process.env.GOOD_READ_DEVELOPER_KEY = "";
                underTest("test")
                    .then(done.fail)
                    .catch(err => {
                        expect(err.message).toBe('Error in good read API')
                        done();
                    });
            });
        });
    });

    describe("bookDetail funtion, ", () => {
        const underTest = GoodReadAPI.bookDetail
        it("should be an function.", () => {
            expect(typeof underTest).toBe('function');
        });
        it("should return a promise.", () => {
            const goodRead = underTest().catch(() => { });
            expect(typeof goodRead.then).toBe('function');
            expect(typeof goodRead.catch).toBe('function');
        });
        it("should throw an error if a book id is not provided.", (done) => {
            underTest()
                .then(done.fail)
                .catch(err => {
                    expect(err.message).toBe('Provide book Id');
                    done();
                });
        });
    });
});
