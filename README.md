<div align="center">
    <img src="https://docapi.datafetchpro.com/featured_google_api.png" width="60%" />
    <br />
    <a href="https://ctrl.lol/discord"><img src="https://img.shields.io/discord/1397785576253423616?color=5865F2&logo=discord&logoColor=white" alt="support server" /></a>
    <a href="https://www.npmjs.com/package/sheetiq"><img src="https://img.shields.io/npm/v/sheetiq?maxAge=3600" alt="npm version" /></a>
    <a href="https://www.npmjs.com/package/sheetiq"><img src="https://img.shields.io/npm/dt/sheetiq?maxAge=3600" alt="npm downloads" /></a>
</div>

# SheetIQ



## 📦 Installation

```bash
npm i sheetiq
```

## Initialize  (JS)
```js
const {SheetIQ}=require("sheetiq")
const sheet=new SheetIQ({token:"YOUR_BEARER_TOKEN"})
```
## Initialize  (TypeScript)
```ts
import {SheetIQ} from "sheetiq"
const sheet=new SheetIQ({token:"YOUR_BEARER_TOKEN"})
```
## Get Google Sheet
```js
await sheet.getSheet({id:"1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E",range:"Sheet1"}).then(i=>{
    console.log(i)  // you'll get data 
})
```
## Update Google Sheet Data
```js
await sheet.updateSheet({id:'1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E',range:"Sheet1",data:[["example@gmail.com"]],type:"update"})
```

## Append Google Sheet Data
```js
await sheet.updateSheet({id:'1jNPCbbYGT49dlXCeWkAoutazh3Cp2awsJyXnWyAKZ8E',range:"Sheet1",data:[["example@gmail.com"]],type:"append"})
```




