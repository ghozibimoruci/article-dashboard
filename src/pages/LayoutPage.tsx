import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useMediaQuery } from "react-responsive";

const LayoutPage: React.FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div className="row mx-0 vh-100">
            {
                !isMobile && (
                    <div className="col-auto sidebar-wrapper">
                        <Sidebar/>
                    </div>
                )
            }
            <div className="col">
                <div className="row flex-column h-100">
                    <div className="col-auto p-4 bg-white border-bottom">
                        <Navbar/>
                    </div>
                    <div className="col position-relative h-100">
                        <div className="position-absolute w-100 h-100 top-0 start-0 p-4 overflow-auto bg-light">
                            <Outlet /> {/* Renders the nested route components */}
                        </div>
                    </div>
                </div>
            </div>
            {
                isMobile && (
                    <div className="offcanvas offcanvas-start" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <Sidebar/>
                    </div>
                )
            }
        </div>
    );
};

export default LayoutPage;
