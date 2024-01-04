import { Router } from "express";
const router = Router();
import * as controller from '../controller/appControler.js';
import auth,{localVariables} from '../middleware/auth.js';

//post method
router.route('/register').post(controller.register);
//router.route('/registermail').post();//send the email
router.route('/authenticate').post((req,res)=> res.end());//authenticate user
router.route('/login').post(controller.verifyUser, controller.login);//login in app

//get methods
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateotp').get(controller.verifyUser,localVariables,controller.generateOTP); //generate random otp
router.route('/verifyotp').get(controller.verifyOTP); //verify generated otp
router.route('/createresetsession').get(controller.createResetSession); //reset all the variables

//put method
router.route('/updateuser').put(auth,controller.updateUser); //use to update the user profile
router.route('/resetpassword').put(controller.verifyUser,controller.resetPassword); //to reset password




export default router;