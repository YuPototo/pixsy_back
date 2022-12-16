export default interface IPhoto {
    id: string;
    description: string | null;
    url: string;
    link: string;
    topics: string[];
    user: string;
}
