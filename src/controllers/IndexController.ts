import {NextFunction, Request, Response} from "express";

class IndexController {

    constructor() {
    }

    indexView(req: Request, resp: Response, next: NextFunction): void{
        resp.render('index');
    }

}


export default IndexController;
