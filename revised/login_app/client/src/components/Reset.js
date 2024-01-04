import React from "react";
import { Link } from "react-router-dom";
import avatar from '../assets/profile.png';
import styles from '../styles/Username.module.css';
import {useFormik} from 'formik';
import {Toaster} from 'react-hot-toast';

import { resetpwdValidate } from "../helper/Validate";


const Reset = () => {
  const formik = useFormik({
    initialValues : {
      password :'',
      confm_pwd:''
    },
    validate: resetpwdValidate,
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit : async values => { 
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen ">
        <div className={styles.glass} style={{width:"35%"}} >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Reset</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter New Password
            </span>
          </div>
          <form className="py-2" onSubmit={formik.handleSubmit}>
            
            <div className="textbox flex flex-col items-center  gap-5 ">
              <input {...formik.getFieldProps('password')} className={styles.textbox} type="text" placeholder="New Password" />
              <input {...formik.getFieldProps('confm_pwd')} className={styles.textbox} type="text" placeholder="Confirm Password" />
              <button className={styles.btn} type="submit">Reset</button>
            </div>
            

          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
