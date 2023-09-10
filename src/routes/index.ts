import express, { Request, Response } from "express";
import IndexController from "../controllers/IndexController";

const router    =   express.Router();

const indexController   =   new IndexController();


router.get('/', (req, res) => {
    res.redirect('/index');
});
router.get('/index', indexController.indexView.bind(indexController));
router.get('/index2', indexController.index2View.bind(indexController));
router.get('/index3', indexController.index3View.bind(indexController));



export default router;
