import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from 'sweetalert2'


const Detail = () => {
    const details1 = useLoaderData();
    const {name, _id, description, pricePerNight, roomSize, availability, roomImages, specialOffers} = details1;
    const {user} = useContext(AuthContext);

    const handleBook = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const enquiry = form.enquiry.value;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const room = form.room.value;
        const adults = form.adults.value;
        const children = form.children.value;
        const booking = {
            customerName: name,
            email,
            checkIn,
            checkOut,
            room,
            service_id: _id,
            adults,
            children
        }
        console.log(booking);

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
                Swal.fire({
                    title: 'Success',
                    text: 'Confirm Successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                  });
        })
    }
    return (
        <div>
            <div className="relative rounded-lg ml-6 mb-8 mr-6">
                <img className="w-full rounded-lg h-[600px]" src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70">
                    <h1 className="text-6xl font-bold text-center pt-72 text-white">Your Dream Room</h1>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-24 mb-6 container mx-auto">
            <div className="flex-1">
                <img className="w-full rounded-lg" src={roomImages} alt="" />
                <div className="flex-1   p-6 border-b-2 pb-10 justify-between mt-12 md:mt-16">
                <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">{name}</h1>
                <p className="text-xl pt-4 font-medium mb-4">From ${pricePerNight}/Per Night</p>
                </div>
                <div className="flex gap-28 mt-14">
                    <p className="font-bold">Room Size: {roomSize}</p>
                    <div className="flex gap-4">
                        <p className="text-lg font-medium">Offers:</p>
                            {specialOffers.map((offer, index) => (
                                <span key={index} className="bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 md:text-base lg:text-lg">
                                    #{offer}
                                </span>
                            ))}
                        </div>
                </div>
                <div className="mt-12 font-medium text-gray-400">
                    <p>{description}</p>
                </div>
            </div>
            <div>
                <form onSubmit={handleBook}>
                    <div>
                        <p className="text-lg font-medium">Full Name*</p>
                    <input className="border p-2 w-full bg-gray-200" type="text" defaultValue={user?.displayName} name="name" id="name" placeholder="Full Name" />
                    </div>
                    <div className="mt-3">
                        <p className="text-lg font-medium">Email*</p>
                        <input className="border p-2 w-full bg-gray-200" type="email" name="email" defaultValue={user?.email} id="email" placeholder="Email" />
                    </div>
                    <div className="mt-3">
                        <p className="text-lg font-medium">Your Enquiry*</p>
                        <textarea className="border w-full bg-gray-200" name="enquiry" rows="4" cols="50" required></textarea>
                    </div>
                    <div className="mt-3">
                        <p className="text-lg font-medium">Check In</p>
                        <input className="p-2 border bg-gray-200 w-full" type="date" name="checkIn" id="checkIn" />
                        <p className="text-lg mt-6 font-medium">Check Out</p>
                        <input className="p-2 border bg-gray-200 w-full" type="date" name="checkOut" id="checkOut" />
                        <p className="text-lg mt-6 font-medium">Room</p>
                        <input className="p-2 border bg-gray-200 w-full" type="number" name="room" id="room" placeholder="1" />
                    </div>
                    <div className="bg-gray-200 p-4 mt-6 rounded-md">
                            <p className="font-medium">Guests</p>
                        <div className="flex mt-4 pb-6">
                            <input className="bg-gray-200 " type="number" name="adults" id="adults"  placeholder="ADULTS 1"/>
                            <input className="bg-gray-200" type="number" name="children" id="children" placeholder="CHILDREN 0" />
                        </div>
                    </div>
                        <input className="btn bg-white hover:bg-black hover:text-white w-full mt-4" type="submit" value="BOOK CONFIRM" />
                </form>
            </div>
            </div>
        </div>
    );
};

export default Detail;