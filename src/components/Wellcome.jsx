import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

Button






function Wellcome() {
  return (
    <>

    <div><p>Wellcome to My Favourtie Images. This is a place to sotorage any pictures you find in the Worl Wide Web. <br />
    </p>
    <Link to={"http://localhost:5173/uploadImage"}><Button variant="outline-dark" size='lg' bg="secondary">Start adding a picture</Button></Link>
    </div>

    </>
  );
}

export default Wellcome