import Alert from 'react-bootstrap/Alert';
import { useLoaderData, useParams } from 'react-router-dom';
import ImageHandler from '../handler/ImageHandler';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


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

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { ...image, ...updatedImage };
    const { id } = image[0];
    ImageHandler.updateImage(id, updatedData);
  };

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

  <Form style={{border:"1px solid black", height:"80%", width:"50%", marginTop:"10%", marginLeft:"25%"}} onSubmit={handleSubmit}>
  <h2>Editing {i.imageName} </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="id"></Form.Label>
        <Form.Control type="hidden" defaultValue={updatedImage.id}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="imageName">Title</Form.Label>
        <Form.Control onChange={handleFieldChange} name="imageName" defaultValue={updatedImage.imageName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="category">Category</Form.Label>
        <label htmlFor="category">Category</label>
                    <select onChange={handleFieldChange} name="category" defaultValue={updatedImage.category}>
                      <option value="nature">Nature</option>
                      <option value="society">Society</option>
                      <option value="science">Science</option>
                    </select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="imageSource">Image Source</Form.Label>
        <Form.Control onChange={handleFieldChange} name="imageSource" defaultValue={updatedImage.imageSource} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={handleAddClick}>
        Submit
      </Button>

      <Link to="/" >
      <Button id="back" type="button" value="Back to Gallery">
        Back to Gallery
      </Button>
      </Link>

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
    </Form>
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