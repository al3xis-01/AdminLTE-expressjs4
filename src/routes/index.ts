import express, { Request, Response } from "express";
import IndexController from "../controllers/IndexController";
import authMiddleware from "../middleware/authMiddleware";

const router    =   express.Router();

const indexController   =   new IndexController();


router.get('/', authMiddleware, (req, res) => {
    res.redirect('/index');
});
router.get('/index', authMiddleware, indexController.indexView.bind(indexController));
router.get('/index2', authMiddleware,  indexController.index2View.bind(indexController));
router.get('/index3', authMiddleware,  indexController.index3View.bind(indexController));



export default router;
