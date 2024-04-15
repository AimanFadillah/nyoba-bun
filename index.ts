import express, { type Request,type Response,type Express} from 'express'
import routeGroup from './routeGroup';

const app : Express = express();


routeGroup(app,(req,res,next) => {
    return next()
},route => {
    route.get("/",(req:Request,res:Response) : Response => {
        return res.send("Hello Word")
    })
})

app.get("*",(req:Request,res:Response) : Response => res.sendStatus(404))

app.listen(5000,() : void => console.log("Server on http://localhost:5000"))