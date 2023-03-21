import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../layout/LayoutPublic";
import Gallery from "../pages/Gallery";
import UploadImage from "../pages/UploadImage";
import EditImage from "../pages/EditImage";
import ImageHandler from '../handler/ImageHandler';
import DetailImage from "../pages/DetailImage";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
                    {
                        index: true,
                        element: <Gallery />,
                        loader: fetchImages,
                    },
                    {
                        path: '/uploadImage',
                        element: <UploadImage />,
                    },  
                    {
                        path: '/editImage/:imageName',
                        element: <EditImage />,
                        loader: fetchImage,
                    },    
                    {
                        path: '/detailview/:id',
                        element: <DetailImage />,
                        loader: fetchImage,
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
    const image = await ImageHandler.loadImage(params. imageName);
    return { image };
}
