import express from "express"
import mongoose from "mongoose";
import dotenv  from "dotenv";
import userRouter from "./router/userRouter.js";
import testRouter from "./router/testRouter.js";
import reservasRouter from "./router/reservasRouter.js";    
import clientRouter from "./router/clientRouter.js";

dotenv.config()
const app = express();

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("El servidor se esta ejecutando correctamente.");
})

//mongodb connection
mongoose.set("strictQuery",true)
mongoose.connect(process.env.MONGODB_URI).then(()=> console.log("Conectado a la DB MongoDB Atlas"))
.catch((error)=> console.error(error));



//middleware
app.use(express.json())
app.use("/user", userRouter)
app.use("/client", clientRouter)
app.use("/reservas", reservasRouter)
app.use("/test", testRouter)