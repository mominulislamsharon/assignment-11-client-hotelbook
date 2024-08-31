
import ReactModal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
ReactModal.setAppElement('#root');

import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Modal from 'react-modal';
import Register from "../Register/Register";
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import axios from 'axios';

const LoginModal = ({ isOpen, closeModal }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

        
  const {signIn, googleLogin} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;


    signIn(email, password)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const user = {email};
      // token jwt 
      axios.post('https://hotel-book-server.vercel.app/jwt', user, {withCredentials: true})
      .then(res => {
        console.log(res.data)
      })
    })
    .catch(error => {
      console.log(error)
    })
  };

  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
        const user = result.user;
        console.log(user);
    })
    .catch(error => {
        console.log(error);
    })
  }

  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };


  return (
    <Modal className="fixed  md:w-1/2  rounded-lg"
    overlayClassName="fixed inset-0 bg-white rounded-lg  md:w-1/2 mx-auto md:h-[500px] mt-28" isOpen={isOpen} onRequestClose={closeModal}>
      {!registerModalOpen && (
        
      <div className='flex flex-col justify-center items-center'>
      
      <h2 className="text-2xl mt-4 font-bold text-center border-b-2 w-full pb-4 mb-4">Login</h2>
      <form onSubmit={handleLogin} className=' border-b-2   p-4 mx-auto w-1/2'  >
        <div className=''>
        <input className=' w-full border mb-3 p-2 rounded-md'
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        </div>
        <div className=''>
        <input className='w-full border mb-3 p-2 rounded-md'
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        </div>
        <input className='w-full btn  mb-6 ' type="submit" value="SIGN IN!" />
      </form>
      <div className='flex flex-col sm:flex-row gap-3  mt-3'>
      <button onClick={handleGoogleLogin} className="btn font-bold flex p-2 bg-gray-100 border border-gray-300 rounded">
          <FaGoogle className="text-red-600 "></FaGoogle>
          Login With Google
        </button>
        <button  className="btn font-bold flex items-center justify-center p-2 bg-gray-100 border border-gray-300 rounded">
          <FaGithub></FaGithub>
          Login With GitHub
        </button>
      </div>
      <div className=' w-full text-center ml-8 mt-6'>
        <h1 className='text-lg font-bold'>DO NOT HAVE AN ACCOUNT?</h1>
       <button onClick={handleRegisterClick} className='font-medium  text-green-400 btn'>CREATE AN ACCOUNT--</button>
      </div>
      </div>
      )}
      {registerModalOpen && <Register closeModal={() => setRegisterModalOpen(false)}></Register>}
    </Modal>
  );
};

export default LoginModal;