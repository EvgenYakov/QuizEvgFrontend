export interface User{
    name: string;
}

export interface Folder{
    _id?:string,
    name:string,
    url:string,
    count: number,
    share: boolean
}