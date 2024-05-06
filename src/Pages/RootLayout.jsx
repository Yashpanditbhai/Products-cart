import React from "react";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";

const RootLayout=()=>{
    return (
        <div className="root-div">
            <Navigation/>
            <main>
                <Outlet/>
            </main>
        </div>
    )
};
export default RootLayout