import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ImageHandler from '../Handler/ImageHandler';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DetailView() {
  const {id} = useParams();
  const [image, setImage] = useState([null])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
    async function fetchImage() {
      const imageData = await ImageHandler.loadImage(id);
      setImage(imageData);
    }
    fetchImage();
  }, [id]);

  if (!image) {
    return <div>Loading...</div>;
  }
  
  const { name, category, imageStatus, source}= image;

  

    return(
        <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>

    );
}