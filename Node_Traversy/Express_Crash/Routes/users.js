const express = require('express');
const uuid = require('uuid');
const router= express.Router();

const obj=[
    {
      id:1,
      name:'aryan',
      amount:200,
    },{
      id: 2,
      name:'kalu',
      amount: 1000,
    }
  ];
  

//gets all members
router.get('/',(req,res)=>{
    res.json(obj);
  });
  
  //get single member
  router.get('/:id',(req,res)=>{
    const found = obj.some(obj => obj.id.toString() === req.params.id);
    
    if(found){
      res.json(obj.filter(obj => obj.id.toString() === req.params.id));
    } else{
      res.status(400).json({msg:"user not found"});
    }
    
  });

  // create member
 router.post('/',(req,res)=>{
   const newMember ={
     id:uuid.v4(),
     name:req.body.name,
     amount:req.body.amount,
   };

   if(!newMember.name || !newMember.amount){
     return res.status(400).json({msg:"include data"});
   }
   obj.push(newMember);
   res.json(obj);
 });

 // update user
 router.put('/:id',(req,res)=> {
   const updUser = req.body;
   obj.forEach(obj => {
    if(obj.id === parseInt(req.params.id)){
      obj.name = updUser.name ? updUser.name : obj.name;
      obj.amount = updUser.amount ? updUser.amount : obj.amount;
      
      res.json({ msg:"successfully updated", obj});
     
     }
     
   });

 });


 //delete user
 router.delete('/:id',(req,res)=>{
  const found = obj.some(obj => obj.id.toString() === req.params.id);
  
  if(found){
    res.json({msg:'successfully deleted',obj:obj.filter(obj => obj.id.toString() !== req.params.id)});
  } else{
    res.status(400).json({msg:"user not found"});
  }
  
});

 

module.exports=router;