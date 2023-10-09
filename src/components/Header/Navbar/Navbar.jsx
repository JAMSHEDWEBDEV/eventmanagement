import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Navbar = () => {
    const {user,LogOut} = useContext(AuthContext);

    const Navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Registration</NavLink></li>
    </>
      
      const handleLogOut =()=>{
        LogOut()
        .then(()=>{
            console.log('successfully logOut')
        })
        .catch(error =>{
              console.error(error)
        })
      }




    return (
        <div className="navbar bg-gray-100 rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold rounded-box w-52">
                        {Navlinks}
                    </ul>
                </div>
                <a className="text-2xl font-bold">Health<span className="text-2xl font-bold text-red-500">Care</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="font-bold text-[16px] menu menu-horizontal px-1">
                    {Navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link 
                    onClick={handleLogOut}
                    className=" px-6 text-xl font-bold rounded py-2 bg-green-400">SignOut</Link>
                     :<Link 
                     to="/login"
                     className=" px-6 text-xl font-bold rounded py-2 bg-green-400">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;