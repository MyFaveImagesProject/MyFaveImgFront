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
    loadProduct(id) {
        return ProductService.getProduct(id);
    },
    deleteImage(id){
        return ImageService.deleteImage(id);
    },
    updateProduct(id, updatedProduct){
        if (!updatedProduct) {
            return;
        }

        let updatedProductStructure = {
            "name": updatedProduct.name,
            "price": updatedProduct.price,
            "img": updatedProduct.img,
            "category": updatedProduct.category,
            "productStatus": updatedProduct.productStatus,
            "unit": updatedProduct.unit,
            "description": updatedProduct.description,
            "date": new Date(),
            "id": updatedProduct.id
        }

        return ProductService.updateProduct(id, updatedProductStructure);
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