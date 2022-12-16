import { isKeywordInPhoto } from "../utils";

describe("isKeywordInPhoto()", () => {
    it("should find keyword in description", () => {
        const photo = {
            id: "1",
            description: "This is a description",
            url: "https://example.com",
            link: "https://example.com",
            topics: [],
            user: "2",
        };

        const keywordOne = "description";
        expect(isKeywordInPhoto(photo, keywordOne)).toBeTruthy();

        const keyWordTwo = "desc";
        expect(isKeywordInPhoto(photo, keyWordTwo)).toBeTruthy();

        const keyWordThree = "description___";
        expect(isKeywordInPhoto(photo, keyWordThree)).toBeFalsy();
    });

    it("should find keywork in topics", () => {
        const photo = {
            id: "1",
            description: "This is a description",
            url: "https://example.com",
            link: "https://example.com",
            topics: ["topic1", "topic2"],
            user: "2",
        };

        const keywordOne = "topic1";
        expect(isKeywordInPhoto(photo, keywordOne)).toBeTruthy();

        const keywordTwo = "top";
        expect(isKeywordInPhoto(photo, keywordTwo)).toBeTruthy();

        const keyWordThree = "topic1___";
        expect(isKeywordInPhoto(photo, keyWordThree)).toBeFalsy();
    });

    it("should find keyword in user", () => {
        const photo = {
            id: "1",
            description: "This is a description",
            url: "https://example.com",
            link: "https://example.com",
            topics: ["topic1", "topic2"],
            user: "userName",
        };

        const keywordOne = "userName";
        expect(isKeywordInPhoto(photo, keywordOne)).toBeTruthy();

        const keywordTwo = "name";
        expect(isKeywordInPhoto(photo, keywordTwo)).toBeTruthy();

        const keyWordThree = "userName___";
        expect(isKeywordInPhoto(photo, keyWordThree)).toBeFalsy();
    });
});
