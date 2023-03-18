import { Outlet, useNavigation } from "react-router-dom";


const LayoutPublic = () => {

    const navigation = useNavigation()

    return (
        <>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default LayoutPublic;