import  toast  from "react-hot-toast"

export async function usernameValidate  (value) {
    const errors  = usernameVerify({},value);
    return errors;
}


// validate username
const usernameVerify =(error={},value )=>{
    if(!value.username){
        error.username= toast.error('Username required..!');
    }else if(value.username.includes(" ")){
        error.username=toast.error('invalid username');
    }
        return error;
    
}

export async function passwordValidate  (value) {
    const errors  = passwordVerify({},value);
    return errors;
}


//validate password
const specialChar =  /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const passwordVerify =(error={},value) =>{
    if(!value.password){
        error.password=toast.error('Password required..!');
    }else if(value.password.includes(" ")){
        error.password=toast.error('wrong password!');
    }else if(value.password.length < 4){
        error.password=toast.error('password must be more than 4 length!');
    }else if(!specialChar.test(value.password)){
        error.password=toast.error('password must have special character!');
    }
    return error;
}


//validate reset password
export async function resetpwdValidate(value){
    const error=passwordVerify({},value);

    if(value.password !== value.confm_pwd){
        error.exist = toast.error("Password not match..!");
    }
    return error;
}

// validate register form
export async function registerValidate(values){
    const error = usernameVerify({},values);
    error.password = passwordVerify(error,values);
    error.email = emailVerify(error,values);
    return error;
}

//email verification
const emailVerify = (error,values) => {
    if(!values.email){
        error.email = toast.error("email required..!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("wrong email..!");
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        error.email = toast.error("invalid email address..!");
    }
    return error;
}

//validate profile

export async function profileValidate(value){
    const error = emailVerify({},value);
    return error;

}

