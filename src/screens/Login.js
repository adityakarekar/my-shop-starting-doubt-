import Navbar_component from '../components/Navbar_component';
import {Form,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Login()
{
    return(
<div>
        <Navbar_component />
      <div className="row">

             <div className="col-lg-4"></div>
             
        <div className="col-lg-4">
        <h1 className="text-center text-success">Login Screen </h1>
            <Form>
           
           <Form.Group>
             <Form.Label> Email<span className='text-danger'>  *</span> </Form.Label>
             <Form.Control required type="email" placeholder="Enter Your Email" />

           </Form.Group>
 
           <Form.Group>
             <Form.Label> Password </Form.Label>
             <Form.Control type="password" placeholder="Enter Your Password" />

           </Form.Group>

           
             <Button variant="success" className="font-center">
              Login
            </Button> 
            <Form.Group>
             <h4 className="text-center">OR</h4>
           </Form.Group>
           
           <Form.Group>
             <Button variant="outline-primary">
             <Link to ="/register"> Register</Link>
            </Button>
           </Form.Group>
        

            </Form>

        </div>
           
              <div className="col-lg-4"></div>

      </div>

</div>
    );
}
export default Login;