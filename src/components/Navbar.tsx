// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const location = useLocation();

    const handleLogout = () => {
        const callback = () => {
            localStorage.removeItem("token"); // Remove token
            navigate("/login"); // Redirect to login
        }
        // uncomment below for integrate API
        // const API_URL = `url_logout`;
        // const token = localStorage.getItem("token");
        // axios.post(API_URL, {
        //     headers: {
        //         Authentication: `Bearer ${token}`
        //     }
        // }).then(
        //     _ => {
        //         callback();
        //     }
        // ).catch(error => {
        //     console.log("Error : ", error);
            
        // })
        // uncomment above for integrate API
        // comment below for integrate API
        callback();
        // comment above for integrate API
    };    

    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate("/login");
        }
        const userDetailString = localStorage.getItem("user_detail");
        if(userDetailString){
            const userDetail = JSON.parse(userDetailString);
            setUsername(userDetail.username);
        }else{
            navigate("/login");
        }
    }, []);
    
  return (
    <div className="row justify-content-between">
        <div className="col-auto">
            <h5 className="mb-0">Welcome: {username}</h5>
        </div>
        <div className="col-auto">
            <ul className="nav">
                <li className="nav-item">
                    <button className={"nav-link" + (location.pathname === "/dashboard" ? " active" : " text-black")} type="button" onClick={() => {
                        navigate("/dashboard")
                    }}>Dashboard</button>
                </li>
                <li className="nav-item">
                    <button className={"nav-link" + (location.pathname === "/article-list" ? " active" : " text-black")} type="button" onClick={() => {
                        navigate("/article-list")
                    }}>Article</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link text-black" type="button" onClick={handleLogout}>Logout</button>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;
