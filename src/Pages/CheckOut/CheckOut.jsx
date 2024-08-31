import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";


const CheckOut = () => {
    const {user} = useContext(AuthContext);
    // const user = { email: 'aaaa@gmail.com' };
    const [checkOuts, setCheckOuts] = useState([]);

    

    // const url = `http://localhost:5000/booking?email=${user.email}`;
    // useEffect(() => {
    //   axios.get(url, {withCredentials: true})
    //   .then(res => {
    //     console.log(res.data)
    //     setCheckOuts(res.data);
    //   })
    //     // fetch(url)
    //     // .then(res => res.json())
    //     // .then(data => setCheckOuts(data))
    // },[])



useEffect(() => {
        // const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        // setCheckOuts(bookings);
        fetch(`http://localhost:5000/booking/${user.email}`)
        .then(res => res.json())
        .then(data => setCheckOuts(data))
    }, []);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/booking/${id}?email=${user.email}`, {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json'
                  }
                })
                .then(res => res.json())
                .then(data => {
                  if(data.deletedCount > 0){

                    Swal.fire({
                      title: "Deleted!",
                      text: "Your booking has been deleted.",
                      icon: "success"
                  });

                    const remaining = checkOuts.filter(booking => booking._id !== id);
                    setCheckOuts(remaining);
                    localStorage.setItem('bookings', JSON.stringify(remaining));
                  } 
                  else {
                    Swal.fire({
                      title: "Error!",
                      text: "There was a problem deleting your booking.",
                      icon: "error"
                  });
                  }
                })
                .catch(error => {
                  Swal.fire({
                    title: "Error!",
                    text: "There was a problem deleting your booking.",
                    icon: "error"
                });
                })
            }
        });
    };


    

    return (
        <div>
          <div className="relative mb-8 ml-6 mr-6">
                <img className="w-full rounded-lg h-[500px]" src="https://images.pexels.com/photos/12715452/pexels-photo-12715452.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70">
                    <h1 className="text-6xl font-bold text-center pt-72 text-white">This Is Your Booking Room</h1>
                    <p className="text-center text-white text-3xl pt-4">Get Started Your Enjoy</p>
                </div>
            </div>
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