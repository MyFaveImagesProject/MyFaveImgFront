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
    loadImage(id) {
        return ImageService.getImage(id);
    },
    deleteImage(id){
        return ImageService.deleteImage(id);
    },
    updateImage(id, updatedImage){
        // if (!updatedProduct) {
        //     return;
        // }

        let updatedImageStructure = {
            "imageName": updatedImage.imageName,
            "imageSource": updatedImage.imageSource,
            "category": updatedImage.category,
        }

        return ImageService.updateImage(id, updatedImageStructure);
    },
    async fetchProducts() {
        const products = await ProductHandler.loadProducts();
        return { products };
    },
    async fetchProduct({ params }) {
        const product = await ProductHandler.loadProduct(params.id);
        return { product };
    },
}

export default ImageHandler