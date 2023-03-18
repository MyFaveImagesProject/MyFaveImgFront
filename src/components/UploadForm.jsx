import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ImageHandler from '../handler/ImageHandler';
import Button from 'react-bootstrap/Button';
// import '../../src/index.css'
import { v4 as uuidv4 } from 'uuid';



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
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <fieldset>

        <input id="ImgName" placeholder='Title' {...register("imageName", { required: true })} />

        {errors.ImgName && <span>This field must be filled</span>}

        <select id="category" name="category" {...register("category", { required: true })}>
        {errors.category && <span>This field must be filled</span>}
        <option value="select">Category...</option>
        <option value="nature">Nature</option>
        <option value="society">Society</option>
        <option value="science">Science</option>
        </select>

   



        {/* <input id="description" placeholder='Descripción' {...register("description", { required: true })} />
        {errors.description && <span>Debe rellenar este campo</span>} */}


        <fieldset>

          <input id="ImageSource" placeholder='SELECT' type="file" onChange={handleImageChange} />
          {/* <input id="ImageSource" placeholder='URL'{...register("ImageSource", { required: true })} /> */}
          {errors.ImageSource && <span>Debe rellenar este campo</span>}

          {/* <div id="term">
          
          <input id="Terms" placeholder='terms' type="checkbox" value="checkbox" className="inline" {...register("terms", { required: true })} />
          {errors.terms && <span>Debe rellenar este campo</span>}
          <label>Acepto los términos y condiciones</label>
          </div> */}

        </fieldset>
      </fieldset>
      <div id="buttons">
      <input onClick={handleAddClick} id="submit" type="submit" value="GUARDAR" />
      <input id="reset" type="reset" value="LIMPIAR" />
      </div>

      <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
        <Alert.Heading>Image Uploaded</Alert.Heading>
        <p>
          Enjoy your gallery!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={handleAlertClose} variant="outline-success">
            Cerrar
          </Button>
        </div>
      </Alert>
    </form>
  )

}

export default UpLoadForm