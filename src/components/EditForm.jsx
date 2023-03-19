import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useLoaderData, useParams } from 'react-router-dom';
import ImageHandler from '../handler/ImageHandler';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';

const EditForm = () => {
  const { image } = useLoaderData();
  console.log(image);
  const [updatedImage, setUpdatedImage] = useState(image[0]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setUpdatedImage({
      ...updatedImage,
      [name]: value,
    });
  };
  
  console.log(updatedImage)

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { ...image, ...updatedImage };
    const { id } = image[0];
    ImageHandler.updateImage(id, updatedData);
    console.log(id, updatedData)
  };


    return (
      <>
        
            {image.map(i =>(
                <Container key={i.id}>
                <h2>EDITING {i.imageName}</h2>
                <form onSubmit={handleSubmit}>
                  <fieldset>
                    <label htmlFor="id"></label>
                    <input name="id" defaultValue={updatedImage.id} />
      
                    <label htmlFor="imageName">Title</label>
                    <input onChange={handleFieldChange} name="imageName" defaultValue={updatedImage.imageName} />
      
                    <label htmlFor="category">Category</label>
                    <select onChange={handleFieldChange} name="category" defaultValue={updatedImage.category}>
                      <option value="nature">Nature</option>
                      <option value="society">Society</option>
                      <option value="science">Science</option>
                    </select>
      
                    <label htmlFor="imageSource">Image Source</label>
                    <input onChange={handleFieldChange} name="imageSource" defaultValue={updatedImage.imageSource} />
                    <p>{i.imageSource}</p>
                  </fieldset>
                  <div id="buttons">
                    <input id="submit" type="submit" value="UPDATE" />
                    <Link to="/" className="nav--item">
                      <input id="back" type="button" value="Back to Gallery" />
                    </Link>
                  </div>
                </form>
                </Container>
                ))}
              
            
          
      </>
    );
  };

  export default EditForm;








// const EditForm = () => {
//     let { image } = useLoaderData();
//     const [imageName, setImageName] = useState("");
//     const [category, setCategory] = useState("");
//     const [imageSource, setImageSource] = useState("");
//     cosnt [id, setId] = useState("");


//     console.log(image)


//         const handleNameChange = (event) => {
//             let imageNameInput = event.target.value;
//             setImageName(imageNameInput);
//         }

//         const handleCategoryChange = (event) => {
//             let categoryInput = event.target.value;
//             setCategory(categoryInput);
//         }
//         const handleImageSourceChange = (event) => {
//             let imageSourceInput = event.target.value;
//             setImageSource(imageSourceInput);
//         }


//         const handleSubmit = (event) => {
//             event.preventDefault();
//             let updatedImage = {imageName, imageSource, category, id};
//             ImageHandler.updateImage(updatedImage);
//         }

//         const [showAlert, setShowAlert] = useState(false);

//         const handleAddClick = () => {
//             setShowAlert(true);
//         }

//         const handleAlertClose = () => {
//             setShowAlert(false);
//         }


//     return (
//         <>
//             {image.map(i => (

//                 <Container>
//                      <h2 key={i.id}>EDITING {i.imageName}</h2>
//                 <form onSubmit={handleSubmit}>
//                     <fieldset>

//                         <label for="id"></label>
//                         <input name="id" value={id || i.id} type="hidden" />

//                         <label for="imageName">Title</label>
//                         <input onChange={handleNameChange} name="imageName" value={imageName || i.imageName} />

//                         <label for="category">Category</label>
//                         <select onChange={handleCategoryChange} name="category" value={category || i.category}>
//                         <option value="select">{i.category}</option>
//                         <option value="nature">Nature</option>
//                         <option value="society">Society</option>
//                         <option value="science">Science</option>
//                         </select>


//                         <fieldset>
//                         <label for="imageSource">Image Source</label>
//                         <input onChange={handleImageSourceChange} name="imageSource" value={imageSource || i.imageSource} />


//                         </fieldset>
//                     </fieldset>
//                     <div id="buttons">
//                     <input onClick={handleAddClick} id="submit" type="submit" value="UPDATE" />
//                     <Link to="/" className="nav--item"><input id="back" type="button" value="Back to Gallery" /></Link>
//                     </div>

//                     <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
//                 <Alert.Heading>Image updated</Alert.Heading>
//                 <p>
//                   Enjoy your gallery
//                 </p>
//                 <hr />
//                 <div className="d-flex justify-content-end">
//                   <Button onClick={handleAlertClose} variant="outline-success">
//                     Close
//                   </Button>
//                 </div>
//                 </Alert>
//                 </form>
//                 </Container>

//             ))}








//         </>
// )}
//  export default EditForm