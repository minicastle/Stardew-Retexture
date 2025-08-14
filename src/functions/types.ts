export type ContentsData = {
    Title:string,
    Author:string,
    url:URL,
    Info:string,
    Images:string[],
    viewer:number,
    loadDate:Date,
    updateDate?:Date,
    tags?:("character"|"npc"|"animal"|"structure"|"mob"|"item"|"map")[]
}
export type FilterType = "character"|"structure"|"npc"|"animal"|"mob"|"item"|"map";