import { Link } from 'react-router-dom';
import error from '../../../public/error.jpg'

const ErrorPage = () => {
    return (
        <div className='w-1/3 mx-auto '>
            <img src={error} alt="" />
            <Link to='/'><button className='text-2xl btn bg-[#00dfc2] font-bold'>Home Back -----</button></Link>
        </div>
    );
};

export default ErrorPage;