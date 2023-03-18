// import { useState } from "react";
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import { useLoaderData } from "react-router-dom";
// import ImageHandler from "../handler/ImageHandler";
// import { Link } from "react-router-dom"




// const EditForm = () => { 
//         const { image } = useLoaderData();
//         // const id = image.filter(i => i.id =)
//         const [imageName, setImageName] = useState(image.imageName);
//         const [imageSource, setImageSource] = useState(image.imageSource);
//         const [category, setCategory] = useState(image.category);


//         // const handleImgChange = (event) => {
//         //     const file = event.target.files[0];
//         //     const reader = new FileReader();
//         //     reader.readAsDataURL(file);
//         //     reader.onload = () => {
//         //         setImg(reader.result);
//         //     };
//         // };
    
//         const handleNameChange = (event) => {
//             let imageNameInput = event.target.value;
//             setImageName(imageNameInput);
//         };

//         const handleCategoryChange = (event) => {
//             let categoryInput = event.target.value;
//             setCategory(categoryInput);
//         };
//         const handleImageSourceChange = (event) => {
//             let imageSourceInput = event.target.value;
//             setImageSource(imageSourceInput);
//         };

    
//         const handleSubmit = (event) => {
//             event.preventDefault();
//             let updatedImage = {imageName, imageSource, category, };
//             ImageHandler.updateImage(id, updatedImage);
//         };

//         const [showAlert, setShowAlert] = useState(false);

//         const handleAddClick = () => {
//             setShowAlert(true);
//         }

//         const handleAlertClose = () => {
//             setShowAlert(false);
//         }

//     return (
//         <>
//         <h2>Editing image:</h2>
//             <p>{image.name}</p>
//         <form onSubmit={handleSubmit}>
//             <fieldset>
//                 <label for="imageName">Title</label>
//                 <input onChange={handleNameChange} id="imageName" placeholder={image.name} />
                
//                 <label for="category">Category</label>
//                 <select onChange={handleCategoryChange} id="category" name="category" placeholder={image.category}>
//                 <option value="select">{image.category}</option>
//                 <option value="nature">Nature</option>
//                 <option value="society">Society</option>
//                 <option value="science">Science</option>
//                 </select>

//                 <label for="price">Precio del producto</label>
//                 <input onChange={handlePriceChange} id="price" placeholder={product.price} />
                
//                 <label for="units">Unidades del producto</label>
//                 <input onChange={handleUnitChange} id="units" type={'number'} placeholder={product.unit} />
                
//                 <label for="description">Descripción del producto</label>
//                 <input onChange={handleDescriptionChange} id="description" placeholder={product.description} />
                
//                 <label for="productState">Estado del producto</label>
//                 <select onChange={handleProductStatusChange} id="productState" name="productState" placeholder={product.productStatus}>
//                 <option value="selecciona">{product.productStatus}</option>
//                 <option value="nuevo">Nuevo</option>
//                 <option value="semminuevo">Seminuevo</option>
//                 <option value="desperfectos">Con desperfectos</option>
//                 </select>

//                 <fieldset>
//                 <label for="imageSource">Image Source</label>
//                 <input onChange={handleImageSourceChange} id="imageSource" placeholder={image.imageSource} />


//                 </fieldset>
//             </fieldset>
//             <div id="buttons">
//             <input onClick={handleAddClick} id="submit" type="submit" value="UPDATE" />
//             <Link to="/" className="nav--item"><input id="back" type="button" value="Back to Gallery" /></Link>
//             </div>

//             <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
//         <Alert.Heading>Image updated</Alert.Heading>
//         <p>
//           Enjoy your gallery
//         </p>
//         <hr />
//         <div className="d-flex justify-content-end">
//           <Button onClick={handleAlertClose} variant="outline-success">
//             Close
//           </Button>
//         </div>
//       </Alert>
//         </form>
//         </>
//         );
// };

//  export default EditForm;