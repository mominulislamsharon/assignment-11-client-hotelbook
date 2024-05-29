

import { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import Modal from 'react-modal';
import Register from "../Register/Register";

const LoginModal = ({ isOpen, closeModal }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
  };
  const handleRegisterClick = () => {
    setRegisterModalOpen(true);
  };

  return (
    <Modal className="fixed  md:w-1/2  rounded-lg"
    overlayClassName="fixed inset-0 bg-white rounded-lg  md:w-1/2 mx-auto md:h-[500px] mt-28" isOpen={isOpen} onRequestClose={closeModal}>
      {!registerModalOpen && (
      <div className='flex flex-col justify-center items-center'>
      
      <h2 className="text-2xl mt-4 font-bold text-center border-b-2 w-full pb-4 mb-4">Login</h2>
      <form className=' border-b-2   p-4 mx-auto w-1/2' onSubmit={handleLogin}>
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
          name="poassword"
          required
        />
        </div>
        <input className='w-full btn  mb-6 ' type="submit" value="SIGN IN!" />
      </form>
      <div className='flex flex-col sm:flex-row gap-3  mt-3'>
      <button  className="btn font-bold flex p-2 bg-gray-100 border border-gray-300 rounded">
          <FaGoogle className="text-red-600 "></FaGoogle>
          Login With Google
        </button>
        <button className="btn font-bold flex items-center justify-center p-2 bg-gray-100 border border-gray-300 rounded">
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