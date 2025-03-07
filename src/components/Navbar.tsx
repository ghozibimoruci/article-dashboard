import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const isMobile = useMediaQuery({ maxWidth: 767 });

    
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove token
        navigate("/login"); // Redirect to login
    };    

    useEffect(()=>{
       const userDetailString = localStorage.getItem("user_detail");
       if(userDetailString){
            const userDetail = JSON.parse(userDetailString);
            setUsername(userDetail.username);
        }
    }, [])
  return (
    <div className="row justify-content-between">
        <div className="col-auto">
            {
                isMobile && (
                    <button className="btn btn-icon p-0 d-flex d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                )
            }
        </div>
        <div className="col-auto">
            <div className="flex text-end dropdown">
                <button className="btn btn-link text-decoration-none text-black p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <h5 className="mb-0">Hi, {username}</h5>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li><button className="dropdown-item" type="button" onClick={handleLogout}>Logout</button></li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Navbar;
