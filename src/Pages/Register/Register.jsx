

const Register = ({closeModal}) => {
    
    return (
        <div className="">
            <h1 className="text-2xl text-center mt-6 font-bold border-b-2 pb-10">SIGN UP</h1>
            <form>
                <div className="mt-16 ">
                <div className="flex justify-center gap-4"><p className="text-lg font-medium">First Name*</p>
                <input className="border p-2 rounded-md" type="text" name="firstName" id="" placeholder="First Name" required/>
                <p className="text-lg font-medium">LastName*</p>
                <input className="border p-2 rounded-md" type="text" name="lastName" id="" placeholder="Last Name" required/>
                </div>
                <div className="flex justify-center gap-6 mt-12">
                <p className="text-lg font-medium">Email*</p>
                <input className="border p-2 rounded-md" type="email" name="email" id="" placeholder="Email" required />
                <p className="text-lg font-medium">Password*</p>
                <input className="border p-2 rounded-md" type="password" name="password" id="" placeholder="Password" required/>
                </div>
                <input className=' w-full mt-8 btn  mb-6 ' type="submit" value="SIGN UP" />
                </div>
            </form>
            <div>

            </div>
            <button onClick={closeModal} className='font-medium  text-green-400 mt-8 btn w-full'>Back to Login</button>
        </div>
    );
};

export default Register;