describe("Good Read API integration, ", () => {
    const GooReadAPI = require('../../api/good-read');
    it("should function to search book and get book details, ", () => {
        expect(GooReadAPI.searchBook).toBeDefined();
        expect(GooReadAPI.bookDetail).toBeDefined();
    });

    describe("searchBook funtion, ", () => {
        it("should be an function", () => {
            expect(typeof GooReadAPI.searchBook).toBe('function');
        });
        it("should return a promise", () => {
            expect()
        });
    });
});
