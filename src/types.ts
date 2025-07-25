export interface SheetIQParam{
    token:string
}
export type SheetIQGetSheet={
    key?:boolean
}
export type SheetIQUpdateSheet={
    id:string
    range:string
    data:string[][]
    type:"append"| "update"
}