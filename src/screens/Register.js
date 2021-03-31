import React,{useState} from 'react';
import Navbar_component from '../components/Navbar_component';
import {Form} from 'react-bootstrap';
import {Function_registerAPI} from './API';




function Register()
{

  const [values,setValues]= useState(
   {
      firstname:'xyz',
      lastname:'k',
      email:'xyz@gmail.com',
      address:'Pune',
      password:'adi123',
      error:false,
      success:false


    }
     
  );

      const{firstname,lastname,email,address,password,error,success}=values;

      const HandleChange=inputtype_name=>event=>
      {
        setValues({...values,error:false,[inputtype_name]:event.target.value});
         //...values =update data of array 'value';
        //...inputtype_name=email,firstname,lastname,etc;                                                                      //...inputtype_name=email,firstname,lastname,etc;
      };
           
      const [datafromBackend, updatedatafromBackendadd] = useState();

     const onSubmit = event =>
      {

       event.preventDefault();
       
       setValues({ ...values, error: false });

       Function_registerAPI({ firstname,lastname,email,address,password })
         .then(data => 
            {
           if (data.error) 
           {
             setValues({ ...values, error: data.error, success: false });
           } 
           else 
           {
            
            setValues({ ...values,  success: true });
               
              updatedatafromBackendadd(data);
                    console.log(data);
                    setValues(
                      {
                    ...values,
                    firstname: "",
                    lastname: "",
                    email: "",
                    address: "",
                    password: "",
                    error: false,
                    success: true
                    }
                          );
           }
         })
       console.log("hi")
     };   



    return(
      <div>
      <Navbar_component />
    <div className="row">

           <div className="col-lg-4"></div>
           
      <div className="col-lg-4">
      <h1 className="text-center text-danger">Registration Screen </h1>
          <Form>
         
         <Form.Group>
           <Form.Label>First Name<span className='text-danger'>  *</span> </Form.Label>
           <Form.Control required type="text" onChange={HandleChange("firstname")} placeholder="Enter Your First Name" />

         </Form.Group>
         <Form.Group>
           <Form.Label>Last Name<span className='text-danger'>  *</span> </Form.Label>
           <Form.Control required type="text" onChange={HandleChange("lastname")} placeholder="Enter Your Last Name" />

         </Form.Group>

         <Form.Group>
           <Form.Label> Email <span className='text-danger'>  *</span></Form.Label>
           <Form.Control type="email" onChange={HandleChange("email")} placeholder="Enter Your email id" />

         </Form.Group>
         
         <Form.Group>
           <Form.Label> Address <span className='text-danger'>  *</span></Form.Label>
           <Form.Control type="text" onChange={HandleChange("address")} placeholder="Enter Your Address" />
          </Form.Group>
         <Form.Group>
           <Form.Label> Password <span className='text-danger'>  *</span></Form.Label>
           <Form.Control type="password" onChange={HandleChange("password")} placeholder="Enter Your Password" />
               
           
         </Form.Group>
         
         <Form.Group>
           <button onClick={onSubmit} className="RegisterBtn font-center">Register</button>
         </Form.Group>



         

      </Form>
                     
      </div>
         
            <div className="col-lg-4"></div>
         <ul>
           <li>First Name:{firstname}</li> 
           <li>Last Name:{lastname}</li> 
           <li>Email:{email}</li> 
           <li>Address:{address}</li> 
           <li>Password:{password}</li> 
         </ul>
        


          <p>
            Data From Backend :{JSON.stringify(updatedatafromBackendadd)}

          </p>

    </div>

</div>
    )
}
export default Register;