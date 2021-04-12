import React,{useState} from 'react';
import Navbar_component from '../components/Navbar_component';
import {Function_registerAPI} from './API';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function Register()
{
   //array use state 
   const [myvalues,setValues] = useState({
    firstname:'',
    lastname:'',
    email:'',
    address:'',
    password:'',
    error:false,
    success:false
}
);


const [datafromBackend, updatedatafromBackendadd] = useState();



const { firstname,lastname,email,address, password, error, success } = myvalues;  



const handleChange = inputtype_name => e => 
{
setValues( { ...myvalues,[inputtype_name]: e.target.value } );
};


const onSubmit = event =>
{
  console.log("hello")
event.preventDefault();

setValues({ ...myvalues, error: false });

Function_registerAPI({ firstname,lastname, email, address, password })
 .then(data => 
    {
   if (data.error) 
   {
     setValues({ ...myvalues, error: data.error, success: false });
   } 
   else 
   {
    
    setValues({ ...myvalues,  success: true });
       
      updatedatafromBackendadd(data);
            console.log(data);
            setValues({
            ...myvalues,
            firstname: "",
            lasttname: "",
            email: "",
            address: "",
            password: "",
            error: false,
            success: true
            });
   }
 })
};
  return(
       <div>
         <Navbar_component />
         <div className="row">

                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">

                                <h1 className="text-danger"> Registration Screen</h1>

                                <div className="form-group">
                                            <label htmlFor="">First Name : </label>
                                            <input type="text" value={firstname}  onChange={handleChange("firstname")}  required placeholder="Enter User First Name"
                                             className="form-control" />

                                </div>

                                <div className="form-group">
                                            <label htmlFor=""> Last Name : </label>
                                            <input type="text" value={lastname}  onChange={handleChange("lastname")}  required placeholder="Enter User Last Name"
                                             className="form-control" />

                                </div>

                                <div className="form-group">
                                            <label htmlFor="">User Email : </label>
                                            <input type="email" value={email} onChange={handleChange("email")}   required placeholder="Enter User Email"
                                             className="form-control"/>

                                <div className="form-group">
                                            <label htmlFor="">Address : </label>
                                            <input type="text" value={address}  onChange={handleChange("address")}  required placeholder="Enter Address"
                                             className="form-control" />

                                </div>

                                </div>
                                <div className="form-group">
                                            <label htmlFor="">User Password : </label>
                                            <input type="password" value={password}   onChange={handleChange("password")}     required placeholder="Enter User Password"
                                             className="form-control"/>

                                </div>
                                <div className="form-group">

                                            <button onClick={onSubmit}   className="btn btn-danger mx-auto d-block">Register</button>

                                </div>

                    </div>
                    <div className="col-lg-4"></div>

                    <ul>
                        <li>First Name : {myvalues.firstname}</li>
                        <li>Last Name : {myvalues.lastname}</li>
                        <li>User Email : {myvalues.email}</li>
                        <li>User Address : {myvalues.address}</li>
                        <li>User password : {myvalues.password}</li>
                        <li>User success : {myvalues.success}</li>
                    </ul>
                    <br />
                   

                    <p>
                        Data From Backend :   {JSON.stringify(updatedatafromBackendadd)}

                    </p>

            </div>
          
       </div>

  );
}
 
export default Register;


