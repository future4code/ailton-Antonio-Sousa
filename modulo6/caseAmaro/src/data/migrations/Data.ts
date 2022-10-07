import * as path from "path";
import { fileSysten } from "../../services/FileSysten";

const lendojson = new fileSysten().readFileJson(path.resolve(__dirname, "../../../src/produtos.json"))

 //console.log(lendojson)

export const resultIdName = lendojson.products.map((item:any)=> {
    return {id:item.id, name:item.name}
})
//console.log(result)

export const tagsArray = lendojson.products.map((item:any)=> {
    return item.tags
})

console.log(tagsArray)
console.log(tagsArray[1])




