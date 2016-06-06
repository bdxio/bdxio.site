export interface INews {
    id: number;

    published: number;
    title: string;
    date: string;
    content: string;
    
    thumbnail: string;
    picture: string;
    pictureStyles?: string;
}