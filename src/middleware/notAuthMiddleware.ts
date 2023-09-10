import {NextFunction, Request, Response} from "express";

const notAuthMiddleware = (req: Request, resp: Response, next: NextFunction) => {

    if (!req.session!.logged) {
        // User authenticate
        next();
    } else {
        // User not authenticate
        resp.redirect('/');
    }
};

export default notAuthMiddleware;
