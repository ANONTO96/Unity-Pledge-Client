import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import ThemeController from "../ThemeController";

const Navbar = () => {
  const {user, signOutUser}=useContext(AuthContext);

  const handleSignOut = () =>{
    signOutUser()
    .then(()=>{
      alert('logged out');
    })
    .catch(error => {
      console.log('error', error.massage)
    })
  }
    return (
        <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><Link to="/">Home</Link></li>
              <li><Link to="allCampaigns">All Campaigns</Link></li>
              {
                user && <>
                <li><Link to="addNewCampaign">Add New Campaign</Link></li>
                </>
              }
              {
                user && <>
                <li><Link to="myCampaigns">My Campaigns</Link></li>
                </>
              }
              {
                user && <>
                <li><Link to="myDonations">My Donations</Link></li>
                </>
              }
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl lg:text-2xl"><img className="w-12" src="https://img.icons8.com/?size=100&id=ADKoce_2WdRr&format=png&color=FAB005" alt="" />Unity Pledge</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
              <li><Link to="allCampaigns">All Campaigns</Link></li>
              {
                user && <>
                <li><Link to="addNewCampaign">Add New Campaign</Link></li>
                </>
              }
              {
                user && <>
                <li><Link to="myCampaigns">My Campaigns</Link></li>
                </>
              }
              {
                user && <>
                <li><Link to="myDonations">My Donations</Link></li>
                </>
              }
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? <div className="space-x-1"><Link to="/" className="btn btn-warning text-white hover:text-black">{user.email}</Link>
            <Link onClick={handleSignOut} to="/" className="btn  btn-warning text-white hover:text-black">Log Out</Link>
            </div>
             :
            <div className="space-x-1">
            <Link to="login" className="btn btn-warning text-white hover:text-black">Log In</Link>
            <Link to="register" className="btn  btn-warning text-white hover:text-black">Registration</Link>
            </div>
          }
          <div className="hidden sm:flex">
          <ThemeController></ThemeController>
          </div>
        </div>
      </div>
    );
};

export default Navbar;