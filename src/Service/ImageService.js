import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7200/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const ProductService = {
    async getImages() {
        let response = await apiClient.get("/Image/GetAll");
        let allImages = response.data;
        return allImages;
    },
    async getProduct(id) {
        let response = await apiClient.get("/products/" + id);
        let product = response.data;
        return product;
    },
    async submitImage(newImage){
        await apiClient.post("/Image/Post", newImage)
    },
    async deleteImage(id){
        axios.delete('https://localhost:7200/Image/Delete?Id=' + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/products/" + id, updatedProduct)
    }
}

export default ProductService