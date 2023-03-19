import { useState, useEffect } from 'react'
import ImageHandler from '../Handler/ImageHandler'
import { purple, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';


function ImagesList() {
  const [images, setImages] = useState([]);


  useEffect(() => {getData();}, []);

  const getData = async () => {
    const data = await ImageHandler.loadImages();
    setImages(data);
  };

  let myImages = images;

  const deleteImage = async (id) => {
    setImages(images.filter((i) => i.id !== id));
    await ImageHandler.deleteImage(id);

  };

  return (

    
       <Row xs={1} md={2} lg={4} className="g-4">
          {/* {Array.from({ length: 1 }).map((_, idx) => ( */}
            <Col lg={4}> </Col>    
            <Col lg={4}> </Col>
            <Col lg={4}> </Col>
                {
                  myImages.map(i => (
                  
                  
                    <Card key={i.id} bg="secondary">
                    
                    <Card.Img variant="top" src={i.imageSource} />
                    <Card.Body>
                      <Card.Title>{i.imageName}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                      </Card.Text>
                      <Link to={`/editImage/${i.id}`} ><Button variant="primary">Edit</Button></Link>
                      <Button variant="primary" onClick={()=>deleteImage(i.id)}>Delete</Button>
                    </Card.Body>
                    </Card>

                  
                  
                  ))
                }
          
                 
                  {/* ))} */}
                 </Row> 
  );
}
    
  
export default ImagesList