import { Outlet } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";




function Root() {
    return (
        <>
            <MyNavbar />
            <Outlet />
        </>
    )
}

export default Root;
