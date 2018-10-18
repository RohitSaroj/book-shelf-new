//To load config
require("dotenv").config();

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
            describe("if GOOD_READ_DEVELOPER_KEY is not set in environment", () => {
                it('should return Error,', (done) => {
                    if (process.env.GOOD_READ_DEVELOPER_KEY === "<GOOD_READ_DEVELOPER_KEY>") {
                        underTest("test")
                            .then(done.fail)
                            .catch(err => {
                                expect(err.message).toBe('Error in good read API')
                                done();
                            });
                    } else {
                        done();
                    }
                });
            })

            describe("if GOOD_READ_DEVELOPER_KEY is set in environment", () => {
                it('should return Result,', (done) => {
                    if (process.env.GOOD_READ_DEVELOPER_KEY === "<GOOD_READ_DEVELOPER_KEY>") {
                        done();
                    } else {
                        underTest("test")
                            .then(response => {
                                if (result) {
                                    expect(response.results).toBeDefined();
                                    done();
                                } else {
                                    done.fail();
                                }
                            })
                            .catch(done.fail);
                    }
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
        describe("if book id is passed,", () => {
            describe("if GOOD_READ_DEVELOPER_KEY is not set in environment", () => {
                it('should return Error,', (done) => {
                    if (process.env.GOOD_READ_DEVELOPER_KEY === "<GOOD_READ_DEVELOPER_KEY>") {
                        underTest("test")
                            .then(done.fail)
                            .catch(err => {
                                expect(err.message).toBe('Error in good read API')
                                done();
                            });
                    } else {
                        done();
                    }
                });
            })

            describe("if GOOD_READ_DEVELOPER_KEY is set in environment", () => {
                describe("if pass argument is not valid Book ID,", () => {
                    it('should return an Error,', (done) => {
                        if (process.env.GOOD_READ_DEVELOPER_KEY === "<GOOD_READ_DEVELOPER_KEY>") {
                            done();
                        } else {
                            underTest("test")
                            .then(done.fail)
                            .catch(err => {
                                expect(err.message).toBe('Error in good read API')
                                done();
                            });
                        }
                    });
                })
                describe("if pass argument is valid Book ID,", () => {
                    it('should return Result,', (done) => {
                        if (process.env.GOOD_READ_DEVELOPER_KEY === "<GOOD_READ_DEVELOPER_KEY>") {
                            done();
                        } else {
                            underTest(20360111)
                                .then(response => {
                                    if (result) {
                                        expect(response.work).toBeDefined();
                                        done();
                                    } else {
                                        done.fail();
                                    }
                                })
                                .catch(done.fail);
                        }
                    });
                });
            });
        });
    });
});
