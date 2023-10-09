import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;

// bannaer image link: https://i.ibb.co/86BDC7g/banner-image.jpg