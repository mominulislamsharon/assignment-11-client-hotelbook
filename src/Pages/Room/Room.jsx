import { useEffect, useState } from "react";
import RoomCard from "./RoomCard";
import { Link } from "react-router-dom";


const Room = () => {
    const [room, setRoom] = useState([]);

    useEffect(() => {
        fetch('room.json')
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
                displayRooms.map(room1 => <RoomCard key={room.id} rooms={room1}></RoomCard>,
            )
            }
        </div>
        <div className="text-center mt-10 mb-6">
           <Link to='/rooms'><button className="text-xl">VIEW ALL ROOMS ❯</button></Link> 
        </div>
        </div>
    );
};

export default Room;