export interface EventsItems{
    id:number,
    Title:string,
    Description:string,
    Location: string,
    CategoryId:number,
    Category:{
        id:number,
        Name:string
    }
}