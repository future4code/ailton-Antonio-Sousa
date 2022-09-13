import { app } from "./app";
import { CreateProducts } from "./endpoints/CreateProducts";
import { createPurchases } from "./endpoints/createPurchases";
import { Createuser } from "./endpoints/Createuser";
import { getProducts } from "./endpoints/getProducts";
import { getSearchProducts } from "./endpoints/getSearchProducts";
import { getUsers } from "./endpoints/getUsers";
import { OrderProducts } from "./endpoints/OrderProducts";


app.post('/users', Createuser)
app.get('/users/get', getUsers)
app.post('/products', CreateProducts)
app.get('/productsAll', getProducts)
app.post('/purchases', createPurchases )
app.get('/order/', OrderProducts)
app.get('/products', getSearchProducts)

