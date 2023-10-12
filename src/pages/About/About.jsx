import { BsCheck2 } from 'react-icons/bs'
const About = () => {
    return (
        <div className='my-10'>
            <div className="text-center my-10 text-4xl font-bold">
                <h1 className='text-green-500'>About us</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                <div data-aos="flip-left"
                    data-aos-easing="ease-in-back"
                    data-aos-duration="2000">
                    <h1 className="text-4xl font-bold">Best Home Care Center with Our HealthCare</h1>
                    <p className="text-xl my-7">Our goal each day is to ensure that our residents’ needs are not only met but exceeded. To make that happen, we are committed to providing an environment in which residents can enjoy a wide range of amenities that allow them to feel independent.</p>
                    <div className="flex gap-6">
                        <div>
                            <div className='flex items-center gap-4'>
                                <span className='h-7 w-7 flex justify-center items-center text-xl border rounded-full bg-green-500 text-white'> <BsCheck2 /></span>
                                <p>In-House Theater</p>
                            </div>
                            <div className=' mt-5 flex items-center gap-4'>
                                <span className='h-7 w-7 flex justify-center items-center text-xl border rounded-full bg-green-500 text-white'> <BsCheck2 /></span>
                                <p>Medication Management</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex items-center gap-4'>
                                <span className='h-7 w-7 flex justify-center items-center text-xl border rounded-full bg-green-500 text-white'> <BsCheck2 /></span>
                                <p>On-Site Physician Services</p>
                            </div>
                            <div className='mt-5 flex items-center gap-4'>
                                <span className='h-7 w-7 flex justify-center items-center text-xl border rounded-full bg-green-500 text-white'> <BsCheck2 /></span>
                                <p>Convenient One-Story Design</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500">
                    <img src="https://i.ibb.co/1sHZV1Y/about-img.jpg" alt="image_png" />
                </div>
            </div>
        </div>
    );
};

export default About;