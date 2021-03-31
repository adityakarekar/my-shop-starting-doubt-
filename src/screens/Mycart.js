import Navbar_component from '../components/Navbar_component.js';
import React from 'react';
import {Table,Button} from 'react-bootstrap';
import productImage from '../images/product.jpg';
import productImage1 from '../images/watch.jpg';
function MyCart()
{
    return(
       
<div>
                <Navbar_component />
            <h1 className="text-center">My Cart</h1>
      <Table striped bordered hover>
          <thead>
           <tr>
        <th>Sr No</th>
        <th> Name</th>
        <th></th>
        <th>Qty</th>
        <th>MRP</th>
        <th>Total Price</th>
        </tr>
           </thead>



           <tfoot>
           <tr>
        <th>Sr No</th>
        <th> Name</th>
        <th>Image</th>
        <th>Qty</th>
        <th>MRP</th>
        <th>Total Price</th>
        </tr>
           </tfoot>

           <tbody>
               <tr>
                   <th>1</th>
                   <th>Adidas Shoes</th>
                   <th><img  width="200px" height="200px"src={productImage}/></th>
                   <th>1</th>
                   <th>10000</th>
                   <th>10000+1500=11500</th>
               </tr>
           </tbody>

           
           <tbody>
               <tr>
                   <th>1</th>
                   <th>Apple watch</th>
                   <th><img  width="200px" height="200px"src={productImage1}/></th>
                   <th>1</th>
                   <th>50000</th>
                   <th>50000+1500=51500</th>
               </tr>
           </tbody>
        </Table>
           <Button variant="success" className="float-right btn-lg placeOrderBtn">Place Order</Button>
 </div>
        
    );
}

export default  MyCart;