import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const LayoutPage: React.FC = () => {
  return (
    <div className="row mx-0 vh-100">
        <div className="col-auto sidebar">
            <Sidebar/>
        </div>
      
        {/* Main Content */}
        <div className="col">
            <div className="row flex-column h-100">
                <div className="col-auto p-4 bg-info-subtle border-bottom">
                    <Navbar/>
                </div>
                <div className="col position-relative h-100">
                    <div className="position-absolute w-100 h-100 top-0 start-0 p-4 overflow-auto">
                        <Outlet /> {/* Renders the nested route components */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LayoutPage;
