import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";
import { FaWifi } from "react-icons/fa6";
import { BsSafe2 } from "react-icons/bs";
import { FaCar, FaSwimmingPool } from "react-icons/fa";
import { MdFreeBreakfast } from "react-icons/md";


const Room = () => {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/room')
        .then(res => res.json())
        .then(data => setRoom(data))
    },[])

    const displayRooms = room.slice(0, 6);
    return (
        <div>
        <div className=" text-center">
            <h1 className="text-3xl font-bold">Our Rooms.</h1>
            <p className="font-medium pt-4 w-1/2 mx-auto">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of soul.</p>
        </div>
            <div className="mt-12 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                displayRooms.map(room1 => <RoomCard key={room1._id} rooms={room1}></RoomCard>,
            )
            }
        </div>
        <div className="text-center mt-10 mb-6">
           <Link to='/rooms'><button className="text-xl">VIEW ALL ROOMS ❯</button></Link> 
        </div>
        <div className="text-center mt-24">
            <h1 className="text-3xl font-bold">Hotel Facilities.</h1>
            <p className="font-medium md:text-base lg:text-lg  pt-4 md:pt-6 text-gray-400">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</p>
        </div>
        <div className="mt-24 w-1/2 container mx-auto">
            <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-12 lg:gap-16 text-center">
            <div>
            <p className="pl-3 pb-3 text-6xl"><FaWifi/></p>
            <p className="text-xl font-medium">Free Wifi</p>
            </div>
            <div>
                <p className="pl-3 pb-3 text-6xl"><BsSafe2 /></p>
                <p className="text-xl font-medium">Safe</p>
            </div>
            <div>
                <p className="pl-3 pb-3 text-6xl"><FaCar /></p>
                <p className="text-xl font-medium">Parking</p>
            </div>
            <div>
            </div>
            </div>
            <div className="flex flex-wrap mt-16 justify-center gap-8 md:gap-12 lg:gap-16 text-center">
            <div>
                <p className="pl-3 pb-3 text-6xl"><FaSwimmingPool /></p>
                <p className="text-xl font-medium">Swimming Pool</p>
            </div>
            <div>
                <p className="pl-3 pb-3 text-6xl"><MdFreeBreakfast /></p>
                <p className="text-xl font-medium">Breakfast</p>
            </div>
            </div>
        </div>
        <div className="mr-6 ml-6 relative  mt-24">
            <img className="w-full h-auto md:h-[600px]  rounded-lg" src="https://img.freepik.com/free-photo/modern-luxury-bedroom-suite-bathroom_105762-1791.jpg?w=1380&t=st=1717456247~exp=1717456847~hmac=28b44154ea09cb98b8e5c815d99ba274860b26b63dc0ebbd9954940fd904af37" alt="" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
        </div>
        <div className="text-center mt-24">
            <h1 className="text-3xl font-medium">Visit Our Famous Facilities</h1>
            <p className="font-medium text-gray-400">Discover our array of facilities designed to enhance your stay, offering modern comforts, luxurious amenities, and personalized services for an unparalleled experience.</p>
        </div>
        <div class="container mx-auto mt-24">
    <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24">
        <div class="lg:w-1/2">
            <img class="rounded-xl w-full" src="https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/11/chef-cook.jpg" alt="" />
        </div>
        <div class="lg:w-1/2 pt-8 lg:pt-0">
            <h1 class="text-2xl lg:text-3xl font-bold">3 Michelin Stars Restaurant, Vézère</h1>
            <p class="font-medium text-gray-300 pt-4">A brasserie inspired by French cuisine, a fresh and modern place to visit and enjoy dishes always handmade of the best ingredients of the season.</p>
        </div>
    </div>
</div>
<div class="container mx-auto mt-24">
    <div class="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
        <div class="lg:w-1/2">
            <h1 class="text-2xl lg:text-3xl font-bold">The Penthouse Bar, An iconic american bar</h1>
            <p class="font-medium text-gray-300 pt-4 lg:pt-8">The cozy bar area accompanying the Penthouse is a classic cocktail bar at it’s finest. Our experienced bartenders are here to offer you both the classic bewerages and the newest global trends.</p>
        </div>
        <div class="lg:w-1/2 pt-8 lg:pt-0">
            <img class="rounded-xl w-full" src="https://demo.goodlayers.com/hotale/resort/wp-content/uploads/sites/2/2021/11/bar.jpg" alt="" />
        </div>
    </div>
</div>

        </div>
    );
};

export default Room;