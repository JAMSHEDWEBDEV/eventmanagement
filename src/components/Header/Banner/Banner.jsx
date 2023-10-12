import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/86BDC7g/banner-image.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content" >
                <div className="md:max-w-xl lg:max-w-4xl" data-aos="fade-down">
                    <h1 className="mb-5 text-xl md:text-3xl lg:text-5xl font-bold">Finding Our Best Services ....</h1>
                    <p className="mb-5 text-xs lg:text-2xl">HealthCare provides Assisted living,different types of care,good fit for health,limited cost and our living environment is very charming. </p>
                    <div data-aos="flip-left">
                        <Link><button className=" px-5 py-3 text-black hover:bg-green-600 rounded text-xl font-bold bg-green-500">Get Appointment</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;