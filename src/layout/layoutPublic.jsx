import { Outlet, useNavigation } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";



const LayoutPublic = () => {

    // const navigation = useNavigation()

    return (
        <>

        
        <MyNavbar />
        <Outlet />
          

        </>
    );
};

export default LayoutPublic;