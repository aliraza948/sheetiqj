import {SheetIQ} from '../dist/index'
import readline from 'readline'
import { describe, it, expect } from 'vitest'
import 'dotenv/config'
function ask(question: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer)
    })
  })
}
const token= process.env.TOKEN as string //await ask("Your Token?")
const sheet= new SheetIQ({token});
sheet.sheet=["1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E","Sheet1"]
describe('SheetIQ.getSheet()', async () => {
    it('should return an object-like array of data', async () => {
    const d = await sheet.getSheet()
    expect(Array.isArray(d)).toBe(true)       // It returns a 2D array
  })
})
describe('SheetIQ.updateSheet()', async () => {
    it('Check Update Funciton', async () => {
     
      const d=await sheet.getSheet({key:false})
      const update=await sheet.updateSheet({data:d,type:"update"})
      expect(typeof update == 'object').toBe(true)   // It should throw error
  })
})
describe('SheetIQ.getSheet()', async () => {
    it('Throw Eror due to empty sheet', async () => {
    sheet.sheet=[]
    await expect(sheet.getSheet()).rejects.toThrow('Your sheet array is not fine')      // It should throw error
  })
})
describe('SheetIQ.getSheet()', async () => {
    it('Throw Eror due to missing sheet name', async () => {
    sheet.sheet=["fsdf"]
    await expect(sheet.getSheet()).rejects.toThrow('Your sheet array is not fine')      // It should throw error
  })
})
describe('SheetIQ', async () => {
    it('Throw Eror due to token', async () => {
    sheet.token=''
    await expect(sheet.getSheet()).rejects.toThrow('Bearer Token not defined')   // It should throw error
  })
})

