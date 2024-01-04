
const express=require('express');
const session = require('express-session');
const app=express();
const router=express.Router();

const multer = require("multer")
let storage = multer.diskStorage({
	destination: function (req, file, cb) {
		//create a tmp dir if not exist
		mkdirp('./tmp').then(() => {
			cb(null, './tmp');
		});
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
	// fileFilter: (req, file, cb) => {
	// 	const whitelist = [
	// 		'image/png',
	// 		'image/jpeg',
	// 		'image/jpg',
	// 		'image/webp'
	// 	  ]
	// 	if (!whitelist.includes(file.mimetype)) {
	// 	  return cb(new Error('file is not allowed'))
	// 	}

	// 	cb(null, true)
	//   }
	// onError: function (err, next) {
	// 	console.log('error', err);
	// 	next(err);
	// },
});
let upload = multer({
    storage:storage
})
const cred={
    'email':'dipakkarmur45@gmail.com',
    'password':'dipak'
}
router.post('/login',upload.single("file"),(req,res)=>{
    
    if(req.body.email === cred.email && req.body.password === cred.password){
        req.session.user=req.body.email;
       
         res.redirect('/route/dashboard');
        
    }else{
        res.end('invalid username');
    }
});

//router for dashboard

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user:req.session.user});
    }
    else{
        res.end('unauthorised user');
    }
});

router.get('/logout',(req,res)=>{
    req.session.destroy(err=>{
        if(err){
            console.log(err);
            res.send('error');
        }
        else{
            res.render('base',{logout:'Logout Successfully'})
        }
    })
})

module.exports=router;