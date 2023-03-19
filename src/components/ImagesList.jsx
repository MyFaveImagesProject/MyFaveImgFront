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

    
       <Row style={{gap: 1, justifyContent:'space-evenly', paddingTop:'30px'}} xs={1} md={2} lg={5} className="g-4">
            <Col style={{justifyContent:'space-evenly'}} xs={4} lg={4}> </Col>    

                {
                  myImages.map(i => (
                  
                  
                    <Card key={i.id} style={{backgroundColor:"beige"}}>
                    
                    <Card.Img variant="bottom" src={i.imageSource} />
                    <Card.Body>
                      <Card.Title>{i.imageName}</Card.Title>
                      <Card.Text>
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