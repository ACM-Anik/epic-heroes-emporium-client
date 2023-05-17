import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/logo.png';


const NavBar = () => {



    const handleLogOut = () => {

    }

    const user = {};


    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink to="/allToys">All Toys</NavLink></li>
                    <li><NavLink to="/myToys">My Toys</NavLink></li>
                    <li><NavLink to="/addAToy">Add A Toy</NavLink></li>
                </>
                :
                <li><NavLink to="/login">Login</NavLink></li>
        }
    </>
    const navIcons = <>
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item bg-orange-600 text-white">8</span>
            </div>
        </label>
        <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
    </>

    return (
        <div>
            <div className="navbar bg-[#F4F3F0] h-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {navItems}
                            {navIcons}
                        </ul>
                    </div>
                    <Link to="/" className=" normal-case text-xl">
                        <img style={{ height: '80px' }} src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <li className="hidden lg:flex">{navIcons}</li>

                    {
                        user &&
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    // user?.photoURL ?
                                    <div className="w-10 border border-[#FF3811] rounded-full">
                                        <img src={user?.photoURL} alt="profile" />
                                    </div>
                                    // :
                                    // <p>Profile</p>
                                }
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between hover:bg-[#FF3811] hover:text-white hover:border-[#FF3811]">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><button onClick={handleLogOut} className="btn-sm ps-4 font-semibold text-center btn-outline text-[#FF3811] border-[#FF3811] hover:bg-[#FF3811] hover:border-[#FF3811]">Logout</button></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;