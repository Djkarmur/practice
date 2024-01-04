import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../config.js";
import otpGenerator from "otp-generator";

// middleware for verify user

export async function verifyUser(req, res, next) {
  try {
    const { username } = req.method == "GET" ? req.query : req.body;

    //check the user existence
    const exist = await UserModel.findOne({ username });
    if (!exist) return res.status(404).json({ error: "can't find user!" });
    next();
  } catch (error) {
    return res.status(404).send({ error: "Authentication error" });
  }
}

//post : /api/register

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;
    const existuser = await UserModel.findOne({ username });
    const existemail = await UserModel.findOne({ email });
    if (existuser) {
      return res.status(500).json({ error: "please enter unique user" });
    } else if (existemail) {
      return res.status(500).json({ error: "please enter unique email" });
    } else {
      if (password) {
        const bcryptpass = await bcrypt.hash(password, 10);

        const user = new UserModel({
          username,
          password: bcryptpass,
          profile: profile || "",
          email,
        });

        // return save result as a response
        await user.save();
        res.status(201).json(user);
      }
    }
    // check the existing user
  } catch (error) {
    return res.status(500).send(error);
  }
}

//post: /api/login
export async function login(req, res) {
  try {
    const { username, password } = req.body;
    const finduser = await UserModel.findOne({ username });

    if (finduser) {
      const passwordcheck = await bcrypt.compare(password, finduser.password);
      if (!passwordcheck) {
        return res.status(400).json({ error: "Don't have password" });
      }
      //create jwt token
      const token = jwt.sign(
        {
          userId: finduser._id,
          username: finduser.username,
        },
        env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      return res.status(200).send({
        msg: "login successful...",
        username: finduser.username,
        token,
      });
    } else {
      return res.status(400).json({ error: "password doesn't match" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

//get: /api/user/example12
export async function getUser(req, res) {
  const { username } = req.params;
  try {
    if (!username) return res.status(500).json({ error: error.message });
    const finduser = await UserModel.findOne({ username });
    if (!finduser) return res.status(501).json({ error: error.message });

    //remove password from finduser
    //mongoose return unnecessary data with object so convert it into json
    return res.status(201).send(finduser);
    const { password, ...rest } = object.assign({}, finduser.toJSON());

    return res.status(201).send(rest);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
}

//put: /api/updateuser
export async function updateUser(req, res) {
  try {
    const {userId} = req.user;
    if (userId) {
      const data = req.body
      //update the data
      const updateuse = await UserModel.findOneAndUpdate({_id:userId}, data);
      // const newData = await UserModel.findOne({_id: id});
      if (!updateuse) {
        return res.status(401).send({ error: "user not found...!" });
      }
      res.status(201).json({msg:"record updated.."});
    }
  } catch (error) {
    return res.status(401).send({ error: "user not found..!" });
  }
}

//get: /api/generateotp
export async function generateOTP(req, res) {
 req.app.locals.otp = await otpGenerator.generate(6,{lowerCaseAlphabets:false ,upperCaseAlphabets:false ,specialChars:false});
 
res.status(201).send({code:req.app.locals.otp});
}

//get: /api/verifyotp
export async function verifyOTP(req, res) {
  const {code}=req.query;
  if(parseInt(req.app.locals.otp) === parseInt(code)){
      req.app.locals.otp=null; //reset the OTP value
      req.app.locals.resetSession = true; //start session from reset password 
 return res.status(201).send({msg:"verify successfully"});
  }
  return res.status(400).send({error:"Invalid otp"})
}

//successfully redirect user when otp is invalid
//get : api/createresetsession
export async function createResetSession(req, res) {
   if(req.app.locals.resetSession){
    req.app.locals.resetSession = false; // allow acess to this route only once
     return res.status(201).send({msg: "access granted!"})
   }
   return res.status(440).send({error:"session expired"})
}

//update the password when we have valid session
//put: api/resetpassword
export async function resetPassword(req, res) {
  try {
    if(!req.app.locals.resetSession) return res.status(440).send({error:"session expired!"});
    const {username,password} = req.body;
    const searchUsername = await  UserModel.findOne({username});
    if(searchUsername){
      const hashPassword = await bcrypt.hash(password,10);
        if(hashPassword){
          const changeData = await UserModel.updateOne({username:searchUsername.username},{password:hashPassword});
           if(changeData){
            req.app.locals.resetSession = false;
             return res.status(201).send({msg:"record updated successfully....!"});
           }else{
            return res.status(404).send({error:"username not found"});
           }
        }
       
    }

    
  } catch (error) {
     return res.status(404).send({error:"username not found"});
  }
}
