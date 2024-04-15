import express,{type Router,type Request,type Response,type NextFunction} from "express"

type Middleware = (req:Request,res:Response,next:NextFunction) => any

export default function routeGroup (route:Router,middleware:Middleware,callbackFunction:(route:Router) => void) : Router{
    const newRouter : Router = express.Router();
    newRouter.use(middleware);
    callbackFunction(newRouter);
    return route.use(newRouter);
}