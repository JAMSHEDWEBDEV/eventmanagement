import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../Services/Services";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

const Home = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            {/* banner page */}
            <Banner></Banner>
            {/* service page start  */}
            <div className="text-center my-6">
            <h1 className="text-3xl font-bold text-green-500">Everyone Deserved Our Best Services</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services.map(service =>
                         <Services key={service.id} service={service}></Services>)
                }
            </div>
            {/* about page start  */}
            <About></About>
            {/* contact part  */}
            <Contact></Contact>
            {/* footer part  */}
            <Footer></Footer>
        </div>
    );
};

export default Home;