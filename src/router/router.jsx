import { createBrowserRouter } from "react-router-dom";
import Gallery from "../pages/Gallery";
import UploadImage from "../pages/UploadImage";
import EditImage from "../pages/EditImage";
import ImageHandler from "../Handler/ImageHandler";
import DetailImage from "../pages/DetailImage";
import Home from "../pages/Home";
import Root from "./Root";
// import ErrorPage from "./error-page";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
                    {
                        index: true,
                        element: <Home />,
                        loader: fetchImages,
                    },
                    {
                        path: '/uploadImage',
                        element: <UploadImage />,
                    },  
                    {
                        path: '/editImage/:id',
                        element: <EditImage />,
                        loader: fetchImage,
                    },    
                    // {
                    //     path: '/detailview/:id',
                    //     element: <DetailImage />,
                    //     loader: fetchImage,
                    // },    
                    {
                        path: '/gallery',
                        element: <Gallery />,
                        loader: fetchImages,
                    },    
                ]
            },
        ]
);

async function fetchImages() {
    const images = await ImageHandler.loadImages();
    return { images };
}

async function fetchImage({ params }) {
    const image = await ImageHandler.loadImage(params.id);
    return { image };
}
