import {NextFunction, Request, Response} from "express";

class IndexController {

    constructor() {
    }

    indexView(req: Request, resp: Response, next: NextFunction): void{
        resp.render('index');
    }

    index2View(req: Request, resp: Response, next: NextFunction): void{
        resp.render('index2');
    }

    index3View(req: Request, resp: Response, next: NextFunction): void{
        resp.render('index3');
    }

}


export default IndexController;
