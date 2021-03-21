import Navbar_component from '../components/Navbar_component';
import {Form,Button} from 'react-bootstrap';

function Register()
{
    return(
        <div>
            <Navbar_component />

            <h1 className="text-center text-danger"> Registration form </h1>   

<Form>
           <Form.Group>
             <Form.Label> Name<span className='text-danger'> * </span>  </Form.Label>
             <Form.Control  required type="text" placeholder="Enter Your Full Name" />

           </Form.Group>

           <Form.Group>
             <Form.Label> Email<span className='text-danger'>  *</span> </Form.Label>
             <Form.Control required type="email" placeholder="Enter Your Email" />

           </Form.Group>
 
           <Form.Group>
             <Form.Label> Password </Form.Label>
             <Form.Control type="password" placeholder="Enter Your Password" />

           </Form.Group>
 
           <Form.Group>
             <Form.Label> Mobile Number </Form.Label>
             <Form.Control type="number" placeholder="Enter Your Mobile No." />

           </Form.Group>
 
 
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>


        </div>
    );
}
export default Register;