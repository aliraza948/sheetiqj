export interface SheetIQParam{
    token:string
}
export type SheetIQGetSheet={
    id:string
    range:string
    key?:boolean
}
export type SheetIQUpdateSheet={
    id:string
    range:string
    data:string[][]
    type:"append"| "update"
}