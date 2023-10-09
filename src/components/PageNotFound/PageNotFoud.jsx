import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="flex justify-center items-center mt-40">
            <div className="text-center border-2 p-10 rounded border-red-700">
                <h1 className="text-4xl font-bold">404</h1>
                <h1 className="text-2xl font-semibold my-8">Oops! Page Not Found</h1>
                <p><Link to="/"><button className="btn bg-green-500 font-bold">Go Home</button></Link></p>
            </div>
        </div>
    );
};

export default PageNotFound;