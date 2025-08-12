export type ContentsData = {
    Title:string,
    Author:string,
    url:URL,
    Info:string,
    Images:string[],
    viewer:number,
    loadDate:Date,
    updateDate?:Date,
    tags?:("Charactor"|"NPC"|"Animal"|"Structure"|"Mob"|"Item"|"Map")[]
}