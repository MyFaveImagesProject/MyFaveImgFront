import ImageService from "../Service/ImageService";



export const ImageHandler = {

    addImage(newImage){

        // if (!newImage) {
        //     return;
        // }

        let image = {

            // "id":newImage.id,
            "imageName": newImage.imageName,  
           
            "category": newImage.category,
            "ImageSource": newImage.ImageSource,
            // "idWeb":newImage.idWeb,
            // "insertDate": newImage.insertDate,
            // "isActive": newImage.isActive
        }
        return ImageService.submitImage(image);
        //return product;
    },
    loadImages(){
        return ImageService.getImages();
    },
    loadImage(imageName) {
        return ImageService.getImage(imageName);
    },
    deleteImage(id){
        return ImageService.deleteImage(id);
    },
    updateImage(updatedImage){
        // if (!updatedProduct) {
        //     return;
        // }

        let updatedImageStructure = {
            "imageName": updatedImage.imageName,
            "imageSource": updatedImage.imageSource,
            "category": updatedImage.category,
            "id":updatedImage.id,
        }

        return ImageService.updateImage(updatedImageStructure);
    },
    async fetchImages() {
        const images = await ImageHandler.loadImages();
        return { images };
    },
    async fetchImage({ params }) {
        const image = await ImageHandler.loadImage(params. imageName);
        return { image };
    },
}

export default ImageHandler