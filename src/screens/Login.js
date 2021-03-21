import Navbar_component from '../components/Navbar_component';
import {Form,Button} from 'react-bootstrap';

function Login()
{
    return(
        <div>
            <Navbar_component />
            <h1 class="text-center text-success">Login Screen</h1>

            

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
 
           
 
  <Button variant="success" type="submit">
    Submit
  </Button>
</Form>




        </div>
    );
}
export default Login;