import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch('room.json')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                rooms.map(room2 => <RoomsCard key={rooms.id} rooms2={room2}></RoomsCard>)
            }
        </div>
    );
};

export default Rooms;