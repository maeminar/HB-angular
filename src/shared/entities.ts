export interface IBlog {
    title:string;
    id:number;
    body:string;
    userId: number;
}

export interface IComment {
    id: number,
    name: string;
    email:string;
    body: string;
}

export interface IUsers {
    id:number;
    name:string;
}