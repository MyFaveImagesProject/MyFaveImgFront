
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useLoaderData, useParams} from "react-router-dom";
import ImageHandler from "../handler/ImageHandler";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';






const EditForm = () => { 
    let { image } = useLoaderData();
    
    console.log(image)
    // const {imageName} = useParams();
    // const [image, setImage] = useState([null])



    // useEffect(() => {
    //   async function fetchImage() {
    //     const imageData = await ImageHandler.loadImage(imageName);
        
    //     setImage(imageData);
    //     console.log(imageData)
    //   }
    //   fetchImage();
    // }, [imageName]);

    // imageToEdit = JSON.parse(image)

    // const { category, imageSource }= image;
    
        const handleNameChange = (event) => {
            let imageNameInput = event.target.value;
            setImageName(imageNameInput);
        }

        const handleCategoryChange = (event) => {
            let categoryInput = event.target.value;
            setCategory(categoryInput);
        }
        const handleImageSourceChange = (event) => {
            let imageSourceInput = event.target.value;
            setImageSource(imageSourceInput);
        }

    
        const handleSubmit = (event) => {
            event.preventDefault();
            let updatedImage = {imageName, imageSource, category, };
            ImageHandler.updateImage(imageName, updatedImage);
        }

        const [showAlert, setShowAlert] = useState(false);

        const handleAddClick = () => {
            setShowAlert(true);
        }

        const handleAlertClose = () => {
            setShowAlert(false);
        }
        

    return (
        <>
            {image.map(i => (

                <Container>
                     <h2 key={i.imageName}>EDITING {i.imageName}</h2>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <label for="imageName">Title</label>
                        <input onChange={handleNameChange} id="imageName" placeholder={i.imageName} />

                        <label for="category">Category</label>
                        <select onChange={handleCategoryChange} id="category" name="category" placeholder={i.category}>
                        <option value="select">{i.category}</option>
                        <option value="nature">Nature</option>
                        <option value="society">Society</option>
                        <option value="science">Science</option>
                        </select>


                        <fieldset>
                        <label for="imageSource">Image Source</label>
                        <input onChange={handleImageSourceChange} id="imageSource" placeholder={i.imageSource} />


                        </fieldset>
                    </fieldset>
                    <div id="buttons">
                    <input onClick={handleAddClick} id="submit" type="submit" value="UPDATE" />
                    <Link to="/" className="nav--item"><input id="back" type="button" value="Back to Gallery" /></Link>
                    </div>

                    <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
                <Alert.Heading>Image updated</Alert.Heading>
                <p>
                  Enjoy your gallery
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                  <Button onClick={handleAlertClose} variant="outline-success">
                    Close
                  </Button>
                </div>
                </Alert>
                </form>
                </Container>
               
            ))}
            
            
        
      
           


        
        </>
)}
 export default EditForm