import { useState, useEffect } from 'react'
import ImageHandler from '../Handler/ImageHandler'
import { purple, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';


function ImagesList() {
  const [images, setImages] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {getData();}, []);

  useEffect(() => {
    let filteredImages = images.filter(image => {
      let matchCheckboxValue = true;
      
      if (searchValues.length > 0) {
        matchCheckboxValue = searchValues.includes(image.category); 
      
        return  matchCheckboxValue;
      }
    });
  
    setFilteredImages(filteredImages);
  }, [images, searchValues]);

  const getData = async () => {
    const data = await ImageHandler.loadImages();
    setImages(data);
  };

  const handleCheckBox = (event) => {
    let searchInput = event.target.value;

    const isChecked = event.target.checked;

    if (isChecked) {
      setSearchValues([...searchValues, searchInput]);
    } else {
      setSearchValues(searchValues.filter(val => val !== searchInput));
    }
  }
let myImages = images;
  
  console.log(filteredImages)
  console.log(images)

  const deleteImage = async (id) => {
    setImages(images.filter((i) => i.id !== id));
    await ImageHandler.deleteImage(id);

  };

  if(searchValues.length !== 0){

   return (
    <Row style={{gap: 0.5, flexDirection:"row-reverse" ,justifyContent:'space-evenly', paddingTop:'30px'}} xs={1} md={2} lg={4} className="g-4"> 


      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        <ToggleButtonGroup type="checkbox" variant="dark" >
      <ToggleButton id="tbg-btn-1" value={"society"} onChange={handleCheckBox}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={"science"} onChange={handleCheckBox}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={"nature"} onChange={handleCheckBox}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>

        </Dropdown.Menu>
      </Dropdown>

        <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>   
        <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>
        <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col>
        <Col style={{justifyContent:'space-evenly'}} xs={4} lg={3}> </Col> 
    
                    {
                      filteredImages.map(i => (
                      
                      
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
   )
  } else return (

     
    <Row style={{gap: 0.5, flexDirection:"row-reverse" ,justifyContent:'space-evenly', paddingTop:'30px'}} xs={1} md={2} lg={4} className="g-4"> 



      <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          Category
        </Dropdown.Toggle>

        <Dropdown.Menu variant="dark">
        <ToggleButtonGroup type="checkbox" variant="dark" >
      <ToggleButton id="tbg-btn-1" value={"society"} onChange={handleCheckBox}>
        Option 1
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={"science"} onChange={handleCheckBox}>
        Option 2
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" value={"nature"} onChange={handleCheckBox}>
        Option 3
      </ToggleButton>
    </ToggleButtonGroup>

        </Dropdown.Menu>
      </Dropdown>

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