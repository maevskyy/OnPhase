import express from "express"
import {signIn,signUp, fetchUser, uploadImage, getImage} from "../controllers/user.js";

const router = express.Router();

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.get('/getImage/:id', getImage)
router.get('/fetchUser', fetchUser)
router.patch('/uploadImage/:id', uploadImage)

export default router