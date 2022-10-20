import { app } from "./controller/app";
import ProdutosContoller from "./controller/ProdutosController";

const produtosController = new  ProdutosContoller

app.get('/teste', async(req, res)=> {
    res.send("Isso é um teste")
})
app.post('/create', produtosController.create)
app.post('/getjson', produtosController.getJson)