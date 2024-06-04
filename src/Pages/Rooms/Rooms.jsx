import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/room')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div>
            <div className="relative mb-8 ml-6 mr-6">
                <img className="w-full rounded-lg h-[500px]" src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70">
                    <h1 className="text-6xl font-bold text-center pt-72 text-white">Your Choice Room</h1>
                    <p className="text-center text-white text-3xl pt-4">Get Started Your Enjoy</p>
                </div>
            </div>
            <div>
                <h1 className="text-center text-3xl font-bold mb-8">Futured Room</h1>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                rooms.map(room2 => <RoomsCard key={rooms._id} rooms2={room2}></RoomsCard>)
            }
        </div>
        </div>
    );
};

export default Rooms;