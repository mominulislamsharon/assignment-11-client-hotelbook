import { Link } from "react-router-dom";


const BookingRow = ({booking, handleDelete}) => {
    const {_id, customerName, checkIn, checkOut, room, status} = booking || {};
    return (
        <tr>
    <td>
      <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </td>
    <td>{customerName}</td>
    <td>{room}</td>
    <td>{checkIn}</td>
    <td>{checkOut}</td>
    <td>
        <Link to={`/update/${_id}`}>
        <button className="btn">Update</button>
        </Link>
    </td>
  </tr>
    );
};

export default BookingRow;