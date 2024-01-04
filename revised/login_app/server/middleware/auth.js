import  jwt  from "jsonwebtoken";
import env from "../config.js";
// authentication middleware
export default async function auth(req, res, next){
    try {
        //access authorise  header to validate request
        const token = req.headers.authorization.split(" ")[1];
       
        //retrieve the user details of the logged in user
        const decodedtoken = await jwt.verify(token, env.JWT_SECRET) ;
        req.user= decodedtoken;

        next();
    } catch (error) {
        res.status(400).json({error:"Authentication Failed.!"});
    }
}

export function localVariables(req,res,next){
    req.app.locals = {
        otp:null, 
        resetSession : false
    }
    next();
}