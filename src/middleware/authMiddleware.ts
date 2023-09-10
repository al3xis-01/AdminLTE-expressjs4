import {NextFunction, Request, Response} from "express";

const authMiddleware = (req: Request, resp: Response, next: NextFunction) => {

    if (req.session!.logged) {
        // User authenticate
        next();
    } else {
        // User not authenticate
        resp.redirect('/login');
    }
};

export default authMiddleware;
