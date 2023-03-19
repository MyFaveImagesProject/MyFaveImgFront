import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7200/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const ImageService = {
    async getImages() {
        let response = await apiClient.get("/Image/GetAll");
        let allImages = response.data;
        return allImages;
    },
    async getImage(imageName) {
        let response = await apiClient.get("/Image/GetImageByName?imageName="+ imageName);
        let image = response.data;
        return image;
    },
    async submitImage(newImage){
        await apiClient.post("/Image/Post", newImage)
    },
    async deleteImage(id){
        axios.delete('https://localhost:7200/Image/Delete?Id=' + id)
    },
    async updateImage(updatedImage){
        await apiClient.patch("/Image/Patch", updatedImage)
    }
}

export default ImageService