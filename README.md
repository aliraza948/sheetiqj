<div align="center">
    <img src="https://docapi.datafetchpro.com/featured_google_api.png" width="60%" />
    <br />
    <a href="https://discord.gg/ZkMMxZQf"><img src="https://img.shields.io/discord/1397785576253423616?color=5865F2&logo=discord&logoColor=white" alt="support server" /></a>
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
sheet.sheet=["SHEET_ID","SHEET_NAME"]
```
## Initialize  (TypeScript)
```ts
import {SheetIQ} from "sheetiq"
const sheet=new SheetIQ({token:"YOUR_BEARER_TOKEN"})
sheet.sheet=["SHEET_ID","SHEET_NAME"]
```
## Get Google Sheet Data
```js
const d=await sheet.getSheet() // data of your sheet
```
## Update Google Sheet Data
```js
await sheet.updateSheet({data:[["example@gmail.com"]],type:"update"})
```

## Append Google Sheet Data
```js
await sheet.updateSheet({data:[["example@gmail.com"]],type:"append"})
```




