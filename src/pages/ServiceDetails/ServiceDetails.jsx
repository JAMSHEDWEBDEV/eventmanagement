import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [serviceDetails, setServiceDetails] = useState({});
    const { id } = useParams();
    const allService = useLoaderData();

    useEffect(() => {
        const findService = allService?.find(service => service.id === id)
        setServiceDetails(findService);
    }, [allService, id])
    console.log(serviceDetails);
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={serviceDetails.img} className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{serviceDetails.name}</h1>
                        <p className="py-6">{serviceDetails.description}</p>
                        <p className="text-xl font-bold">Total-Cost :<span> ${serviceDetails.price}</span></p>
                        <button className="btn font-bold mt-5 bg-green-500">Get Appointed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;