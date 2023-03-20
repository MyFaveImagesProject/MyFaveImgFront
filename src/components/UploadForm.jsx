import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import ImageHandler from '../handler/ImageHandler';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import { Link } from 'react-router-dom';





function UpLoadForm() {
  const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();

  const handleImageChange = (event) => {
    const picture = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(picture);
    reader.onload = () => {
      setValue("imageSource", reader.result);
    };
  }

  const [showAlert, setShowAlert] = useState(false);

  const handleAddClick = () => {
    setShowAlert(true);
  }

  const handleAlertClose = () => {
    setShowAlert(false);
  }

  const onSubmit = (data) => {
    ImageHandler.addImage(data)
    console.log(data)
    // return window.alert("Producto agregado a su cuenta");
}
// const newId = 0; 
// const newGuid = uuidv4();
// const date = new Date();
// const isActive = 1

  return (

    <>
    
    
      <Form style={{borderRadius:"0.625rem", border:"2px solid #d63384", height:"80%", width:"80%", marginTop:"10%", marginLeft:"10%", backgroundColor:"rgba(153, 153, 153, 0.7)"}} onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{backgroundColor:"rgba(153, 153, 153, 1)", borderRadius:"0.625rem", border:"2px solid #d63384"}}>New Image</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label htmlFor="id"></Form.Label>
            <Form.Control type="hidden"/>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="imageName">Title</Form.Label>
            <Form.Control name='imageName' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} {...register("terms", { required: true })} />
         {errors.terms && <span>Debe rellenar este campo</span>}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="category">Category</Form.Label>
                        <select style={{borderRadius:"0.0625rem", backgroundColor:"rgba(255, 233, 246, 1)"}}{...register("terms", { required: true })} name="category" >
                          <option value="nature">Nature</option>
                          <option value="society">Society</option>
                          <option value="science">Science</option>
                        </select>
                        {errors.terms && <span>Debe rellenar este campo</span>}
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label htmlFor="imageSource">Image Source</Form.Label>
            <Form.Control style={{backgroundColor:"rgba(255, 233, 246, 1)", width:"80%",marginLeft:"10%"}} {...register("terms", { required: true })} name="imageSource" />
            {errors.terms && <span>Debe rellenar este campo</span>}
          </Form.Group>
    
          <Button variant="secondary" type="submit" onClick={handleAddClick}>
            Submit
          </Button>
    
          <Link to="/" >
          <Button variant='secondary' bg='dark' id="back" type="button" value="Back to Gallery">
            Back to Gallery
          </Button>
          </Link>
    
          <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
                    <Alert.Heading>Image added to you collections</Alert.Heading>
                     <p>
                       Enjoy your gallery!
                     </p>
                     <hr />
                     <div className="d-flex justify-content-end">
                       <Button onClick={handleAlertClose} variant="outline-success">
                         Close
                       </Button>
                     </div>
                     </Alert>
                </Form>
                
          </>

 )

}

export default UpLoadForm