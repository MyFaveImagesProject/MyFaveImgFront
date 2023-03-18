import { useState, useEffect } from 'react'
import ImageHandler from '../Handler/ImageHandler'

import { purple, orange } from '@mui/material/colors';
import { Link } from 'react-router-dom';







function ImagesList() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    getData();
  }, []);
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

    <div>
        {myImages.map(i => (
          <div key={i.id}>
              <img src= {i.imageSource} alt="" />
              <h3>{i.imageName}</h3>
              <h3>{i.id}</h3>

              <button
                  variant="solid"
                  size="sm"
                  color="secondary.main"
                  aria-label="Delete"
                  sx={{ ml: 'auto', fontWeight: 600, color:  purple[700]}}
                  onClick={() => deleteImage(i.id)}
                  >DELETE
              </button>
        
              
              <Link to={`/editImage/${i.imageName}`} ><button id="add" style={{display: 'flex',flexDirection: 'row', borderRadius:'5px', backgroundColor:"#7C2E9B", color: "#E79036", fontSize:'x-small', height: '2rem', marginRight: '0.5rem', marginLeft: '0.5rem', display:'inline-block', width:'8rem'}}>EDIT</button></Link>
          </div>
          ))
          
        }


    
    </div>
  )
}

export default ImagesList