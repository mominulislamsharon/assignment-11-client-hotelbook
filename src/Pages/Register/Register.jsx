import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";



const Register = ({closeModal}) => {

    const {createUser} = useContext(AuthContext);

   const handleRegister = e => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(firstName, lastName, email, password);

    createUser(email, password)
    .then(result => {
        const user = result.user;
        console.log(user)
        closeModal();
    })
    .catch(error => {
        console.log(error)
    })
   }
    return (
        <div className="ml-6">
            <h1 className="text-2xl text-center mt-4 font-bold border-b-2 pb-10">SIGN UP</h1>
            <form onSubmit={handleRegister}>
                <div className="mt-4 md:flex justify-center gap-4">
                    <div className="md:w-1/3">
                    <p className="text-lg font-medium">First Name*</p>
                <input className="border p-2 rounded-md w-full" type="text" name="firstName" id="" placeholder="First Name" required/>
                    </div>
                <div className="md:w-1/3">
                <p className="text-lg font-medium">LastName*</p>
                <input className="border p-2 rounded-md w-full" type="text" name="lastName" id="" placeholder="Last Name" required/>
                </div>
                </div>
                <div className="md:flex justify-center gap-4 mt-2">
                <div className="md:w-1/3">
                    <p className="text-lg font-medium">Email*</p>
                <input className="border p-2 rounded-md w-full" type="text" name="email" id="" placeholder="Email" required/>
                    </div>
                <div className="md:w-1/3">
                <p className="text-lg font-medium">Password*</p>
                <input className="border p-2 rounded-md w-full" type="password" name="password" id="" placeholder="password" required/>
                </div>
                </div>
                <input className=' w-full mt-8 btn  mb-6 ' type="submit" value="SIGN UP" />
            </form>
            <div>

            </div>
            <p className="text-xl font-bold text-center">ALREADY A ACCOUNT</p>
            <button onClick={closeModal} className='font-medium  text-green-400 mt-6 btn w-full'>Login</button>
        </div>
    );
};

export default Register;