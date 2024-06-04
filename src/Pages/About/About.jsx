

const About = () => {
    return (
        <div>
            <div className="relative rounded-lg ml-6 mr-6">
                <img className="w-full rounded-lg h-[600px]" src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-70">
                    <h1 className="text-6xl font-bold text-center pt-72 text-white">ABOUT US</h1>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-16 container mx-auto mt-24">
                <div>
                    <img className="h-[300px] rounded-lg" src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-8 lg:w-1/2 mt-8 lg:mt-0">
                    <div>
                        <h3 className="text-2xl font-bold">ABOUT That Company</h3>
                        <p className="font-medium text-gray-400 pt-8">Hotel booking provides online reservation services for accommodation worldwide. Users can select their desired location, check availability, and secure bookings through the platform, simplifying travel planning.</p>
                        <p className="font-medium pt-4 text-gray-400">Hotel booking platforms offer a comprehensive range of options, from budget to luxury accommodations, with detailed descriptions and reviews to aid decision-making. Users can also access exclusive deals and discounts, ensuring a convenient and cost-effective booking experience for travelers.</p>
                    </div>
                    <div className="mt-20">
                        <p className="font-medium text-gray-400">Hotel booking platforms streamline the reservation process, offering flexible booking options, including cancellations and modifications. With secure payment systems and 24/7 customer support, they provide peace of mind for travelers worldwide, ensuring a hassle-free and enjoyable stay.</p>
                        <p className="font-medium pt-6 text-gray-400">Hotel booking platforms offer diverse lodging choices, personalized search filters, and instant confirmation. They simplify travel planning, catering to various preferences and budgets, enhancing the overall booking experience for users.</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto mt-24">
            <div>
                <h3 className="text-lg font-medium text-blue-200">ALL OFFERS</h3>
                <h1 className="text-3xl pt-6 text-[#5c5c5c] font-bold">Relax on Vacation</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <div>
                    <h1 className="text-5xl font-bold text-[#696969] pt-4">1</h1>
                    <h3 className="text-[#696969] text-xl font-medium pt-4">Swimming Pool</h3>
                    <p className="text-[#979797] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis pariatur quaerat in possimus dolorem.</p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-[#696969] pt-4">2</h1>
                    <h3 className="text-[#696969] text-xl font-medium pt-4">Meeting Area</h3>
                    <p className="text-[#979797] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis pariatur quaerat in possimus dolorem.</p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-[#696969] pt-4">3</h1>
                    <h3 className="text-[#696969] text-xl font-medium pt-4">Mini CLub</h3>
                    <p className="text-[#979797] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis pariatur quaerat in possimus dolorem.</p>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-[#696969] pt-4">4</h1>
                    <h3 className="text-[#696969] text-xl font-medium pt-4">Indoor Gym</h3>
                    <p className="text-[#979797] pt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quis pariatur quaerat in possimus dolorem.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;