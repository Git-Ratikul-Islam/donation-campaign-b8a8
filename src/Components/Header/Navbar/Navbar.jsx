import { NavLink } from "react-router-dom";
import './Nav.css';


const Navbar = () => {



      return (
            <>

                  <div className="nav">

                        <div className="h-[600px]" >
                              <div className="navbar flex justify-between w-5/6 mx-auto " >
                                    <div className="navbar-start">
                                          <div className="dropdown sm:flex">
                                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                                </label>
                                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                                                      <li className="menu menu-horizontal px-1">
                                                            <NavLink
                                                                  to="/"
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                                  }
                                                            >
                                                                  <a className="text-lg font-bold">Home</a>
                                                            </NavLink>
                                                      </li>
                                                      <li className="menu menu-horizontal px-1">
                                                            <NavLink
                                                                  to="/Donation"
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                                  }
                                                            >
                                                                  <a className="text-lg font-bold">  Donation</a>
                                                            </NavLink>
                                                      </li>
                                                      <li className="menu menu-horizontal px-1">
                                                            <NavLink
                                                                  to="/Statistics"
                                                                  className={({ isActive, isPending }) =>
                                                                        isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                                  }
                                                            >
                                                                  <a className="text-lg font-bold">Statistics</a>
                                                            </NavLink>
                                                      </li>
                                                </ul>



                                          </div>

                                          <div className="">
                                                <img className="h-[60px] w-[200px] " src="https://i.ibb.co/Ytrtqh4/Logo.png" alt="" />
                                          </div>
                                    </div>
                                    <div className="navbar-center hidden lg:flex mr-[52px]">
                                          <ul className="">

                                                <li className="menu menu-horizontal px-1">
                                                      <NavLink
                                                            to="/"
                                                            className={({ isActive, isPending }) =>
                                                                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                            }
                                                      >
                                                            <a className="text-lg font-bold">Home</a>
                                                      </NavLink>
                                                </li>
                                                <li className="menu menu-horizontal px-1">
                                                      <NavLink
                                                            to="/Donation"
                                                            className={({ isActive, isPending }) =>
                                                                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                            }
                                                      >
                                                            <a className="text-lg font-bold">  Donation</a>
                                                      </NavLink>
                                                </li>
                                                <li className="menu menu-horizontal px-1">
                                                      <NavLink
                                                            to="/Statistics"
                                                            className={({ isActive, isPending }) =>
                                                                  isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                            }
                                                      >
                                                            <a className="text-lg font-bold">Statistics</a>
                                                      </NavLink>
                                                </li>

                                          </ul>
                                    </div>

                              </div>
                              <div className="text-center ">
                                    <h2 className="text-[48px] font-bold text-center mt-[145px]">I Grow By Helping People In Need</h2>
                                    <div className="join mt-[40px]">
                                          <div>
                                                <div >
                                                      <input className="input input-bordered join-item md:w-[470px] " placeholder="Search" />
                                                </div>
                                          </div>
                                          <div className="indicator ">
                                                <button className="btn join-item bg-[#FF444A] text-white hover:bg-[#79C23F]">Search</button>
                                          </div>
                                    </div>
                              </div>

                        </div>
                  </div >

            </>

      );
};

export default Navbar;