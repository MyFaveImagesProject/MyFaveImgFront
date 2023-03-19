import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/myNavbar";


const LayoutPublic = () => {

    // const navigation = useNavigation()

    return (
        <>
            <Navbar />
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default LayoutPublic;