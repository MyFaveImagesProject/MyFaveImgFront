

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageHandler from '../Handler/ImageHandler';

export default function DetailView() {


//Esta constante estaba aquí pero no hacía ninguna función, la comento por si nos hace falta más adelante.
  // const { id } = useParams();
 
  const{ image : singleImage} = useLoaderData();

//Esta sería la forma de hacer el get sin useLoaderData, con el uso de useState

  // const [image, setImage] = useState([])
  // useEffect(() => {
  //   async function fetchImage() {
  //     const imageData = await ImageHandler.loadImage(id);
  //     setImage(imageData);
  //   }
  //   fetchImage();
  // })

 
  const deleteImage = async (id) => {
    await ImageHandler.deleteImage(id);
  };


//Como los datos en cuestión son solo un objeto y no un array que contiene objetos, en el return no necesito hacer .map (de hecho eso 
//rompería la aplicación), sino que uso directamente la variable singleImage.

  return (
    <>
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial', backgroundColor: "rgba(135, 135, 135, 0.5)" }}
        >
          <Modal.Dialog size='lg'>
            <Modal.Header style={{ backgroundColor: "rgba(135, 135, 135)" }}>
              <Modal.Title style={{ backgroundColor: "rgba(135, 135, 135)", color: "white" }}>{singleImage.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={singleImage.src} style={{ height: "100%", width: "100%" }} />
            </Modal.Body>

            <Modal.Body>
              <p>{singleImage.category}</p>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: "rgba(135, 135, 135)" }}>
              <Link to={`/editImage/${singleImage.id}`}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Edit</Button></Link>
              <Link to={"/gallery"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Gallery</Button></Link>
              <Link to={"/gallery"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }} onClick={() => deleteImage(singleImage.id)}>Delete</Button></Link>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    </>
  );
}