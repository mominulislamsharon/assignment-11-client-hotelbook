import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Swal from 'sweetalert2';

const Upadate = () => {
    const {id} = useParams();
    const [booking, setBooking] = useState(null);

    useEffect(() => {
        // if(id){

            fetch(`http://localhost:5000/booking-update/${id}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
              })
              .catch(error => console.error("Error fetching booking data:", error));
        // }
    },[id])

     const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const customerName = form.name.value;
        const room = form.room.value;
        const checkIn = form.checkIn.value;
        const checkOut = form.checkOut.value;
        const updateBooking = {customerName, room, checkIn, checkOut};

        fetch(`http://localhost:5000/booking/${id}`,{
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          }, 
          body: JSON.stringify(updateBooking)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount > 0){
            Swal.fire({
              title: "Updated!",
              text: "Booking details have been updated.",
              icon: "success"
          });
          Navigate('/mybookings');
          } else{
            Swal.fire({
              title: "Error!",
              text: "Booking details were not updated.",
              icon: "error"
          });
          }
        })
     }

    return (
        <div>
      <h1>Update Booking</h1>
     
                <form onSubmit={handleUpdate}>
                    <div>
                        <p className="text-lg font-medium">Full Name*</p>
                        <input 
                            type="text" 
                            name="name" 
                            defaultValue={booking?.customerName} 
                            className="input input-bordered w-full mb-4" 
                            required 
                        />
                    </div>
                    <div>
                        <p className="text-lg font-medium">Room*</p>
                        <input 
                            type="text" 
                            name="room" 
                            defaultValue={booking?.room} 
                            className="input input-bordered w-full mb-4" 
                            required 
                        />
                    </div>
                    <div>
                        <p className="text-lg font-medium">Check In*</p>
                        <input 
                            type="date" 
                            name="checkIn" 
                            defaultValue={booking?.checkIn} 
                            className="input input-bordered w-full mb-4" 
                            required 
                        />
                    </div>
                    <div>
                        <p className="text-lg font-medium">Check Out*</p>
                        <input 
                            type="date" 
                            name="checkOut" 
                            defaultValue={booking?.checkOut} 
                            className="input input-bordered w-full mb-4" 
                            required 
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update Booking</button>
                </form>
    </div>
    );
};

export default Upadate;