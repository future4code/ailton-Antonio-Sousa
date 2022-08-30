import { app } from './app';
import { getAllType } from './endpoints/getAllType';
import { getUsers } from './endpoints/getAllUsers';
import { getByName } from './endpoints/getByName';
import { getOrderName } from './endpoints/getOrderName';
import { getPage } from './endpoints/getPage';


app.get('/getusers',getUsers);
app.get('/getByName/:name', getByName);
app.get('/getType/:type', getAllType)
app.get('/getOrder/:type', getOrderName)
app.get('/getPage/', getPage)


