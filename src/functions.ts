import { SheetIQGetSheet, SheetIQParam, SheetIQUpdateSheet } from "./types";

export class SheetIQ {
    public token: string
    private baseUrl: string = 'https://docapi.datafetchpro.com'
    public sheet:string[]=[]
    constructor(p: SheetIQParam) {
        this.token = p.token
    }
    checkParameter(){
        if(!this.token || this.token==undefined) throw Error("Bearer Token not defined")
        if(this.sheet.length < 2) throw Error("Your sheet array is not fine")
    }
    /**
 * Fetches data from a Google Sheet.
 * 
 * @param params - An object containing the sheet ID and range
 * @returns A Promise that resolves to the sheet data
 * 
 * @example 
 * ```ts
 * await sheet.getSheet({
 *   id: "1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E",
 *   range: "Sheet1"
 * });
 * ```
 * @returns [{}]  Array of Object
 * 
 * 
 * @example 
 * ```ts
 * await sheet.getSheet({
 * id: "1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E",
 * range: "Sheet1",
 * key:false
 * 
 * })
 * ```
 * @returns [[]]  2D Array
 */
    async getSheet(params?: SheetIQGetSheet): Promise<string[][]> {
        this.checkParameter()
        const { key = true } = params || {}
        const data = await fetch(`${this.baseUrl}/api/v1/googlesheet/get`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id:this.sheet[0], key, range:this.sheet[1] }),
        });
        if (data.status != 200) throw Error
        return await data.json()

    }

/**
 * Push Data on a Google Sheet.
 * 
 * @param params - An object containing the sheet ID and range
 * @returns A Promise that resolves to the sheet data
 * 
 * @example 
 * It'll append your data at the end of sheet
 * ```ts
 * await sheet.getSheet({
 *   id: "1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E",
 *   range: "Sheet1",
 *   type:"append",
 *   data:[["example@gmail.com"]]
 * });
 * ```
 * @returns `{range}`  
 * 
 * 
 * @example 
 * It'll update sheet range
 * 
 * ```ts
 * await sheet.getSheet({
 *   id: "1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E",
 *   range: "Sheet1",
 *   type:"update",
 *   data:[["example@gmail.com"]]
 * });
 * ```
 * @returns `{range}`
 */
    async updateSheet(params: SheetIQUpdateSheet): Promise<{}> {
        const { id,  range,data,type } = params
        const datac = await fetch(`${this.baseUrl}/api/v1/googlesheet/get`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id,
                range,
                data,
                type
            }),
        });
        if (datac.status != 200) throw Error
        return await datac.json()
    }
}