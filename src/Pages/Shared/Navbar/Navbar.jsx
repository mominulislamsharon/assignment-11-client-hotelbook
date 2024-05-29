
import { Link } from 'react-router-dom';
import logo from "../../../assets/logo.png"
import { useState } from 'react';
import LoginModal from '../../Login/Login';

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
    const navLinks = <>
           <li><Link to='/' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>Home</Link></li>
            <li><Link to='/rooms' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>Rooms</Link></li>
            <li><Link to='/mybookings' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>My Bookings</Link></li>
            <li><Link to='/about' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>About Us</Link></li>
            <li><Link to='/contact' className={({isActive}) => isActive ? 'text-primary   font-bold text-lg' : 'font-bold text-lg'}>Contact Us</Link></li>
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
  {/* <div className="navbar-end">
    <Link onClick={openModal} to='/login' className="btn">Login</Link>
  </div> */}
  <div className="navbar-end">
  <button onClick={openModal} className="btn">Login</button>
  {modalIsOpen && <LoginModal isOpen={modalIsOpen} closeModal={closeModal} />}
</div>
</div>
    );
};

export default Navbar;