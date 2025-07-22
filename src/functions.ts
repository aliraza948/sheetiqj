import { SheetIQGetSheet, SheetIQParam, SheetIQUpdateSheet } from "./types";

export class SheetIQ {
    private token: string
    private baseUrl: string = 'https://docapi.datafetchpro.com'
    constructor(p: SheetIQParam) {
        this.token = p.token
    }
    async getSheet(params: SheetIQGetSheet): Promise<string[][]> {
        const { id, key = true, range } = params
        const data = await fetch(`${this.baseUrl}/api/v1/googlesheet/get`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, key, range }),
        });
        if (data.status != 200) throw Error
        return await data.json()

    }
    async updateSheet(params: SheetIQUpdateSheet): Promise<{}> {
        const { id,  range,data } = params
        const datac = await fetch(`${this.baseUrl}/api/v1/googlesheet/get`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id,  range ,data}),
        });
        if (datac.status != 200) throw Error
        return await datac.json()
    }
}