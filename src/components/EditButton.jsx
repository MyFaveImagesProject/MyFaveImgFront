import React from "react";
import { Link } from "react-router-dom";



function EditButton() {
 
    const [images, setImages] = useState([]);


    useEffect(() => {
      getData();
    }, []);
    const getData = async () => {
      const data = await ImageHandler.loadImages();
      setImages(data);
    };
  
    let myImages = images;


  return (

    <div>
        <Link className="add-link" to={`/editImage/${imageName}`}><button className="Submit" id="add" style={{display: 'flex',flexDirection: 'row', borderRadius:'5px', backgroundColor:"#7C2E9B", color: "#E79036", fontSize:'x-small', height: '2rem', marginRight: '0.5rem', marginLeft: '0.5rem', display:'inline-block', width:'8rem'}}>EDIT</button></Link>

            
          </div>
        
  )
}

export default EditButton