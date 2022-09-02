

import express from 'express';
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser, userLogin, userRegister , getLoggedInUser , verifyUserAccount, recoverpassword , resetPassword } from '../controllers/userController.js';
import { adminhMiddleware } from '../middlewares/adminMiddleware.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { userMiddleware } from '../middlewares/userMiddleware.js';




// init router

const router = express.Router();


// user auth route

router.post('/login', userLogin);
router.post('/register', userRegister);
router.get('/me' , getLoggedInUser);
router.post('/verify' , verifyUserAccount);
router.post('/recover-password' , recoverpassword);
router.post('/reset-password' , resetPassword);


// route REST API

router.route('/').get(adminhMiddleware, getAllUser).post(adminhMiddleware, createUser);
router.route('/:id').get(userMiddleware, getSingleUser).delete(userMiddleware, deleteUser).put(userMiddleware, updateUser).patch(userMiddleware, updateUser);





// export defult router

export default router;