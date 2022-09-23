import { app } from "./controller/app";
import { UserController } from "./controller/UserController";

const userController = new UserController()

app.post('/usuario/create',userController.create )
app.post('/usuario/login',userController.login )