import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";


const CheckOut = () => {
    const {user} = useContext(AuthContext);
    const [checkOuts, setCheckOuts] = useState([]);{};

    

    const url = `http://localhost:5000/booking?email=${user.email}`;
    useEffect(() => {
      axios.get(url, {withCredentials: true})
      .then(res => {
        setCheckOuts(res.data);
      })
        // fetch(url)
        // .then(res => res.json())
        // .then(data => setCheckOuts(data))
    },[])


    const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/booking/${id}`, {
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remaining = checkOuts.filter(booking => booking._id !== id);
            setCheckOuts(remaining);
          }
        })
        .catch(error => {
          console.error('Error deleting booking:', error);
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting your booking.",
            icon: "error"
          });
        });
      }
    });
  };

    

    return (
        <div>
      <div className="overflow-x-auto container mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  
                </label>
              </th>
              <th>Name</th>
              <th>Room</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {checkOuts.map((booking) => (
            <BookingRow key={booking._id} booking={booking} 
            handleDelete={handleDelete}
            ></BookingRow>
          ))}
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default CheckOut;