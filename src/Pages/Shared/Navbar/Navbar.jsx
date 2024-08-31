
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { useContext, useState } from 'react';
import LoginModal from '../../Login/Login';
import { AuthContext } from '../../../Context/AuthProvider';
import proifleImage from '../../../assets/user.png';

const Navbar = () => {
  const {user, logOut, modalIsOpen, openModal, closeModal} = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then(result => {
      console.log(result.user);
    })
    .catch(error => {
      console.log(error.message);
    })
  }

    const navLinks = <>
           <li><Link to='/'>Home</Link></li>
            <li><Link to='/rooms'>Rooms</Link></li>
            {user?.email && <li><Link to='/mybookings'>My Bookings</Link></li>}
            
            <li><Link to='/about'>About Us</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
    </>
    return (
        <div className="navbar bg-base-100 h-24">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <Link to='/' className=" w-36 mt-10 text-xl"><img src={logo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end gap-4">
  <div className='w-12 h-12'>
    <img className='rounded-full' src={user && user.photoURL ? user.photoURL : proifleImage} alt="profile"  />
  </div>
    {
      user?.email ? <>
      
      <button onClick={handleSignOut}  className="btn text-lg font-bold  ">Sign Out</button>
      </>
      :
     <button onClick={openModal} className="btn text-lg font-bold ">Login</button>
    }
  {modalIsOpen && <LoginModal isOpen={modalIsOpen} closeModal={closeModal} />}
</div>
</div>
    );
};

export default Navbar;