
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
const Contact = () => {
    return (
        <div>
            <div className="relative rounded-lg ml-6 mr-6">
                <img className="w-full rounded-lg h-[600px]" src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70">
                    <h1 className="text-6xl font-bold text-center pt-80 text-white">Contact Us</h1>
                    <p className="text-center text-white text-3xl pt-4">Get Intouch</p>
                </div>
            </div>
            <div className="md:flex  pl-24 bg-[#191919] ml-6 mr-6">
            <div className=" text-white w-full">
                <p className="text-4xl pt-8"><FaPhone/></p>
                <h1 className="text-2xl pt-4 font-bold">Phone</h1>
                <p className="pt-4 font-medium">You can contact us on this number</p>
                <p className="pt-4 font-bold">+1-2345-2345</p>
            </div>
            <div className=" text-white w-full">
                <p className="text-4xl pt-8"><MdEmail /></p>
                <h1 className="text-2xl pt-4 font-bold">Email</h1>
                <p className="pt-4 font-medium">YHere you can email your opinion</p>
                <p className="pt-4 font-bold">hotelbook@gmail.com</p>
            </div>
            <div className=" text-white w-full">
                <p className="text-4xl pt-8"><FaPhone/></p>
                <h1 className="text-2xl pt-4 font-bold">Location</h1>
                <p className="pt-4 font-medium">4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342</p>
                <p className="pt-4 font-bold">Google Map</p>
            </div>
            </div>
            <div>
                <div className="container mt-24 mx-auto mb-6">
                    <h1 className="text-3xl text-center font-bold">Leave us your info</h1>
                    <form className="mt-12 ">
                        <div className="text-center"> 
                        <input className="border w-1/4 p-3 bg-gray-100" type="text" name="name" id="" placeholder="Full Name*" />
                        <input className="border ml-2 p-3 w-1/4 bg-gray-100 " type="email" name="email" id="" placeholder="Email" />
                        </div>
                        <div className="text-center mt-4">
                            <input className="border w-1/2 p-3 bg-gray-100" type="text" name="" id="" placeholder="Subject" />
                        </div>
                        <div className="text-center mt-4">
                        <textarea className="w-1/2  border p-6  bg-gray-100 "  name="" id="" placeholder="Message"></textarea>
                        </div>
                        <div className="text-center mt-3">
                         <input className="w-1/2 btn font-bold bg-black text-white " type="submit" value="SUBMIT NOW" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;