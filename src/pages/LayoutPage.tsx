import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutPage: React.FC = () => {
    return (
        <div className="row flex-column vh-100 mx-0">
            <div className="col-auto p-4 bg-white border-bottom">
                <Navbar/>
            </div>
            <div className="col position-relative h-100">
                <div className="position-absolute w-100 h-100 top-0 start-0 p-4 overflow-auto bg-light">
                    <Outlet /> {/* Renders the nested route components */}
                </div>
            </div>
        </div>
    );
};

export default LayoutPage;
