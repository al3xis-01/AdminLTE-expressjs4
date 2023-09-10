import express, { Request, Response } from "express";
import IndexController from "../controllers/IndexController";

const router    =   express.Router();

const indexController   =   new IndexController();


router.get('/', indexController.indexView.bind(indexController));


export default router;
