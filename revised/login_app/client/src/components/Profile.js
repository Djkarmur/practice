import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import styles from "../styles/Username.module.css";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { profileValidate } from "../helper/Validate";
import Convertbase64 from "../helper/Convert";

const Profile = () => {
  const [file, setfile] = useState();
  const formik = useFormik({
    initialValues: {
      firstname:'',
      lastname:'',
      email: "abc123@",
      mobile:'',
      address:''
      
    },
    validate: profileValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  //** formik doesn't support file upload so we need to create this handler  */
  const onUpload = async (e) => {
    const base64 = await Convertbase64(e.target.files[0]);
    setfile(base64);
  };
  return (
    <div className="container mx-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div
          className={styles.glass}
          style={{ height: "90vh", paddingTop: "30px", width: "45vw" }}
        >
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Profile</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              You can update the details
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className=" profile flex justify-center py-4">
              <label htmlFor="profile">
                <img
                  className={styles.profile_img}
                  src={file || avatar}
                  alt="avatar"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>
            <div className="textbox flex flex-col items-center  gap-5 ">
              <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("firstname")}
                className={styles.textbox}
                type="text"
                placeholder="Firstname"
              />
              <input
                {...formik.getFieldProps("lastname")}
                className={styles.textbox}
                type="text"
                placeholder="Lastname"
              />

              </div>
              <div className="name flex w-3/4 gap-10">
              <input
                {...formik.getFieldProps("email")}
                className={styles.textbox}
                type="text"
                placeholder="Email"
              />
              <input
                {...formik.getFieldProps("mobile")}
                className={styles.textbox}
                type="text"
                placeholder="Mobile"
              />

              </div>
              
              <input
                {...formik.getFieldProps("address")}
                className={styles.textbox}
                type="text"
                placeholder="Address"
              />
              <button className={styles.btn} type="submit">
                Register
              </button>

              
              
            </div>
            <div className="text-center py-5">
              <span>
                comeback later? 
                <button className="text-red-500 " to="/">
                  Logout
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
