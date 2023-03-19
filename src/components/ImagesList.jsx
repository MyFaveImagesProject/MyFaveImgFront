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

    
    <Row style={{gap: 0.5, flexDirection:"row-reverse" ,justifyContent:'space-evenly', paddingTop:'30px'}} xs={1} md={2} lg={4} className="g-4"> 

    <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>   
    <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>
    <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>
    <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col> 

                {
                  myImages.map(i => (
                  
                  
                    <Card key={i.id} style={{backgroundColor:"rgba(135, 135, 135, 0.7)"}}>
                    
                    <Card.Img variant="top" src={i.imageSource} style={{marginTop: "0.3125rem", }} />
                    <Card.ImgOverlay style={{margin: "-10px", height:"1.875rem"}}>
                    <Card.Body>
                      <Card.Title style={{backgroundColor:"rgba(233,236,239,0.6"}}>{i.imageName} </Card.Title>

                      </Card.Body>
                      </Card.ImgOverlay>
                      <Card.Footer style={{display:"flex", flexDirection:"row",justifyContent:'space-evenly', alignContent:"flex-end"}}>
                      <Link to={`/editImage/${i.id}`} ><Button variant="outline-light" size='sm'>Edit</Button></Link>
                      <Button variant="outline-light" size='sm' onClick={()=>deleteImage(i.id)}>Delete</Button>
                      </Card.Footer>
                    </Card>

                  
                  
                  ))
                }
          
                 
              
                 </Row> 
  );
}
    
  
export default ImagesList