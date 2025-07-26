export interface SheetIQParam{
    token:string
}
export type SheetIQGetSheet={
    key?:boolean
}
export type SheetIQUpdateSheet={
    data:string[][]
    type:"append"| "update"
}