

const Footer = () => {
    return (
        <div>
            <footer className="footer md:pl-24 bg-[#14141f] p-10 text-white">
   
  <nav>
    <h6 className="text-2xl font-bold">Company</h6> 
    <a className="link text-lg font-medium link-hover">About us</a>
    <a className="link text-lg font-medium link-hover">Contact Us</a>
    <a className="link text-lg font-medium link-hover">Privacy Policy</a>
    <a className="link text-lg font-medium link-hover">Terms & Condition</a>
    <a className="link text-lg font-medium link-hover">FAQs & Help</a>
  </nav> 
  
  <nav>
    <h6 className="text-2xl text0[#85856d] font-bold">Contact</h6> 
    <a className="link text-lg font-medium link-hover">123 Street, New York, USA</a>
    <a className="link text-lg font-medium link-hover">+012 345 67890</a>
    <a className="link text-lg font-medium link-hover">hotelBook@gmail.com</a>
  </nav>
  <div className="mb-4">
    <h4 className="text-2xl mb-4 text0[#85856d] font-bold">Gallery</h4> 
    <div>
        <div className="md:w-[350px] mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <img className="border-4" src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg/" alt="" />
            <img className="border-4" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className="border-4" src="https://images.pexels.com/photos/6454837/pexels-photo-6454837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="md:w-[350px] mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <img className="border-4" src="https://images.pexels.com/photos/12695271/pexels-photo-12695271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className="border-4" src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img className="border-4" src="https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
    </div>
    
  <form className="w-full md:w-auto">
    <h6 className="text-2xl font-bold text-white">Newsletter</h6> 
    <fieldset className="form-control w-full md:w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join flex flex-col md:flex-row">
        <input type="text" placeholder="User Email" className="input text-black input-bordered join-item mb-2 md:mb-0 " /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer> 
<footer className="md:text-center p-4 bg-[#14141f] text-white"> 
  <p>&copy; 2024 Hotel Booking Platform. All rights reserved.</p>
</footer>
        </div>
    );
};

export default Footer;