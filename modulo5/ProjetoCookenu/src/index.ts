import { app } from "./app";
import { signup } from "./endpoints/signup";

app.post('/create-user', signup )
