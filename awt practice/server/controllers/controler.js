import e from "express";
import User from "../model/userSchema.js"

export const createUser = async (req,res) =>{
    const user = req.body
    const newUser = new User(user)

    try{
        await newUser.save();
        res.status(200).json(newUser);
    }catch(err){
        res.status(500).json(err);
    }
    
} 

export const getUsers = async (req,res) =>{
    try {
       const users= await User.find({});
       res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }
}
 
export const editUser = async (req,res) =>{
    const user = req.params.id;
    const data = req.body;
    const editedUser= new User(data);
     
    try{
        await User.findByIdAndUpdate(
            user,editedUser
        )
        res.status(200).json(editedUser);
    }catch(err){
        res.status(400).json(err);
    }
}

export const getUser = async(req,res)=>{
    try {
        const user= await User.findById(req.params.id);
        res.status(200).json(user);
     } catch (error) {
         res.status(500).json(error);
     }
}

export const deleteUser = async(req,res) =>{
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json({msg:"deleted"});
    } catch (error) {
        res.status(400).json(error);
    }
}
  

