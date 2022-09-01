import { app } from "./app";
import { CreateProducts } from "./endpoints/CreateProducts";
import { Createuser } from "./endpoints/Createuser";
import { getProducts } from "./endpoints/getProducts";
import { getUsers } from "./endpoints/getUsers";


app.post('/users', Createuser)
app.get('/users/get', getUsers)
app.post('/products', CreateProducts)
app.get('/productsAll', getProducts)


