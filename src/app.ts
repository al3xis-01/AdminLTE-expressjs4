import express, {NextFunction, Request, Response} from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cookieSession  from 'cookie-session';

/** Init App */
export const app = express();


app.use(cookieSession({
    name: 'session',
    keys: ['H26x5!PnL0LE'],
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

/** BEGIN use Routes */

import indexRouter from "./routes/index";
import loginRouter from "./routes/login";

app.use('/', indexRouter);
app.use('/', loginRouter);

/** END use Routes */



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    // Define un arreglo de rutas que se consideran recursos
    const resourcePaths = ['/assets/', '/images/', '/styles/']; // Añade aquí las rutas de tus recursos

    // Comprueba si la solicitud coincide con alguna ruta de recursos
    const isResource = resourcePaths.some(resourcePath => req.path.startsWith(resourcePath));

    // Si no es un recurso, redirige a la página principal
    if (!isResource) {
        return res.redirect('/');
    }

    // Si es un recurso, pasa al siguiente middleware (manejo de error)
    next(createError(404));
});

// error handler
//app.use(errorMiddleware);


function createError(arg0: number): any {
    throw new Error('Function not implemented.');
}
