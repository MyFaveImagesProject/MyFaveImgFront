import { Outlet } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/MyFooter";




function Root() {
    return (
        <>
            <MyNavbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root;
