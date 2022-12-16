import IPhoto from "./types";

export function isKeywordInPhoto(photo: IPhoto, keyword: string) {
    const keywordLowerCase = keyword.toLowerCase();
    const isInDesd = photo.description
        ?.toLocaleLowerCase()
        .includes(keywordLowerCase);
    const isInTopic = photo.topics.some((topic) =>
        topic.toLocaleLowerCase().includes(keywordLowerCase)
    );
    const isInUser = photo.user.toLocaleLowerCase().includes(keywordLowerCase);
    return isInDesd || isInTopic || isInUser;
}
