import {NextFunction, Request, Response} from "express";

class LoginController {

    loginView(req: Request, resp: Response, next: NextFunction): void{
        resp.render('login');
    }

    loginStore(req: Request, resp: Response, next: NextFunction): void{
        const password  =   req.body.password;
        const email  =   req.body.email;

        /** Implement authenticate*/
        const user: any  =
            {id: 1, first_name: "Alexis", last_name: "Cortes", email: "example@email.com", password: "123"};

        if (user.email === email){
            if (user.password === password){

                req.session!.logged  =   true;
                req.session!.user  =   user;

                resp.redirect('/');
            }
        }
        resp.redirect('/login');
    }

    login2View(req: Request, resp: Response, next: NextFunction): void{
        resp.render('login2');
    }

    logoutDestroy(req: Request, resp: Response, next: NextFunction): void{
        req.session =   null;
        resp.redirect('/Login');
    }
}


export default LoginController;
