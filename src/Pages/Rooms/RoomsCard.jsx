import { Link } from "react-router-dom";


const RoomsCard = ({rooms}) => {
    const {_id, roomImages, name, roomSize, pricePerNight} = rooms || {};
    return (
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure  ><img className="h-[280px]" src={roomImages} alt=""/>
  <div className="absolute text-xl font-medium top-[200px] left-3  text-white bg-black p-2 rounded-md">
    <p>${pricePerNight}/Per Night</p>
  </div>
  </figure>

  <div className="card-body">
    <h2 className="text-2xl font-bold">{name}</h2>
    <h2 className="text-lg font-bold">Room size: {roomSize}</h2>
    <div className="card-actions">
      <Link to={`/details/${_id}`}>
      <button className="btn font-bold text-xl">Book Now ❯</button>
      </Link>
    </div>
</div>
        </div>
    );
};

export default RoomsCard;