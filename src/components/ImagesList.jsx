import { useState, useEffect } from 'react'
import ImageHandler from '../Handler/ImageHandler'
import { Button } from '@mui/material';
import { purple, orange } from '@mui/material/colors';

function ImagesList() {
  const [images, setImages] = useState([]);


  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await ImageHandler.loadImages();
    setImages(data);
  };

  const deleteImage = async (id) => {
    setImages(images.filter((i) => i.id !== id));
    await ImageHandler.deleteImage(id);

  };

  let myImages = images;
 



  return (

    <div>
        {myImages.map(i => (
          <div key={i.id}>
              <img src= {i.imageSource} alt="" />
              <h3>{i.imageName}</h3>
              <h3>{i.id}</h3>
              <Button
          variant="solid"
          size="sm"
          color="secondary.main"
          aria-label="Delete"
          sx={{ ml: 'auto', fontWeight: 600, color:  purple[700]}}
          onClick={() => deleteImage(i.id)}
          >DELETE
        </Button>

            
          </div>
        ))}

        

    
    </div>
  )
}

export default ImagesList