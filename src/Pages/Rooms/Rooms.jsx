import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [filteredRooms, setFilteredRooms] = useState([]);
    const [searchRoom, setsearchRoom] = useState(''); 
    const [selectedRoomType, setSelectedRoomType] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/room')
            .then(res => res.json())
            .then(data => {
                setRooms(data);
                setFilteredRooms(data);
            });
    }, []);

    const handleFilterChange = e => {
        const roomType = e.target.value;
        setSelectedRoomType(roomType);

        filterRooms(roomType, searchRoom); 
    };

    const handleSearchChange = e => {
        const search = e.target.value;
        setsearchRoom(search);
        filterRooms(selectedRoomType, search); 
    };

    // const filterRooms = (roomType, search) => {
    //     let filtered = rooms;

    //     if (roomType && roomType !== 'All') {
    //         filtered = filtered.filter(room => room.name === roomType);
    //     }

    //     if (search) {
    //         filtered = filtered.filter(room => {
    //             return room.name.toLowerCase().includes(search.toLowerCase()) ||
    //                    room.pricePerNight.toString().includes(search); 
    //         });
    //     }

    //     setFilteredRooms(filtered);
    // };
    
    
    const filterRooms = (roomType, search) => {
        const queryParams = new URLSearchParams();
        
        if (roomType && roomType !== 'All') {
            queryParams.append('type', roomType);
        }
        
        if (search) {
            queryParams.append('search', search);
        }
        
        fetch(`http://localhost:5000/room?${queryParams}`)
            .then(res => res.json())
            .then(data => {
                setFilteredRooms(data);
            });
    };
    
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
                <p className="font-medium text-gray-400 pt-4 text-center mb-8">Future room booking at hotels allows guests to reserve accommodations for dates beyond the current availability window, ensuring a secured stay for upcoming travel plans.</p>
            </div>
            <div className="flex flex-col md:flex-row my-8 justify-around space-x-0 md:space-x-0 space-y-4 md:space-y-0  items-center">
            <select className="select select-bordered w-full max-w-xs" onChange={handleFilterChange}>
        <option value="All">All Rooms</option>
        <option value="Single Room">Single Room</option>
        <option value="Family Room">Family Room</option>
        <option value="Double Room">Double Room</option>
        <option value="Luxury Suite">Luxury Suite</option>
        <option value="Honeymoon Suite">Honeymoon Suite</option>
    </select>



<label className="input input-bordered flex items-center gap-2 w-full max-w-xs">
  <input type="text" className="grow" placeholder="Search" value={searchRoom} onChange={handleSearchChange} />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            

{
    filteredRooms.map(room2 => <RoomsCard key={room2._id} rooms={room2}></RoomsCard>)
}

        </div>
        </div>
    );
};

export default Rooms;