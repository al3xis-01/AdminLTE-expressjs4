import express, { Request, Response } from "express";
import LoginController from "../controllers/LoginController";
import notAuthMiddleware from "../middleware/notAuthMiddleware";
import authMiddleware from "../middleware/authMiddleware";

const router    =   express.Router();

const loginController   =   new LoginController();

// Add route with not auth middleware
router.get('/login', notAuthMiddleware, loginController.loginView.bind(loginController));
router.post('/login', notAuthMiddleware, loginController.loginStore.bind(loginController))
router.get('/login2', notAuthMiddleware, loginController.login2View.bind(loginController));

// Add route with auth middleware
router.get('/logout', authMiddleware, loginController.logoutDestroy.bind(loginController));



export default router;
