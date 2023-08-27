import ImageService from "../Service/ImageService";



export const ImageHandler = {

    addImage(newImage){


        let image = {
            "name": newImage.name,  
            "category": newImage.category,
            "src": newImage.src,
        }
        return ImageService.submitImage(image);
        
    },
    loadImages(){
        return ImageService.getImages();
    },
    loadImage(id) {
        return ImageService.getImage(id);
    },
    deleteImage(id){
        return ImageService.deleteImage(id);
    },
    updateImage(id, updatedData){


        let updatedImageStructure = {
            "name": updatedData.name,
            "src": updatedData.src,
            "category": updatedData.category,
            "id":updatedData.id,
        }

        return ImageService.updateImage(id, updatedImageStructure);
    },
    // async fetchImages() {
    //     const images = await ImageHandler.loadImages();
    //     return { images };
    // },
    // async fetchImage({ params }) {
    //     const image = await ImageHandler.loadImage(params. name);
    //     return { image };
    // },
}

export default ImageHandler