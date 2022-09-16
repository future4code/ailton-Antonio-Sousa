import { app } from "./app";
import { followUser } from "./endpoints/followUser";
import { getUsers } from "./endpoints/getUsers";
import { login } from "./endpoints/login";
import { receitas } from "./endpoints/receitas";
import { signup } from "./endpoints/signup";

app.get('/user', getUsers)
app.post('/create-user', signup )
app.post('/login', login)
// seguir user
app.post('/user/follow', followUser)
// Receitas
app.post('/create-receita', receitas)
