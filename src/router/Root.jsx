import { Outlet } from "react-router-dom";
import Navbar from "../components/myNavbar";
import { Navbar } from "react-bootstrap";


function Root() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Root;
