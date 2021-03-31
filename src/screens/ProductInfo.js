
import Navbar_component from '../components/Navbar_component.js';
import productImage from '../images/product.jpg';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";
import { Button } from 'react-bootstrap';
function ProductInfo()
{
return(
<div>
    <Navbar_component />
        <div className="row">
            <div className="col-lg-6  productinfoDiv">
               <img src={productImage} className="mx-auto d-block productImg"/>
            </div>
            <div className="col-lg-6  productinfoDiv,secondDivProduct">
               <h1> Aadi Gym/Walking/Running Running Shoes For Men  (Red)</h1>

               <p>
                   <h6>Special price:</h6>
                   <h4> ₹399 </h4> <span><del>₹1,999</del></span>   <span className="text-success"><b>80% off</b></span>   <span className="text-danger">Hurry only 1 left!!</span>
               
                  <h4 className="avoffer">Available Offers</h4>
                  <ul>
                      <li><i className="fas fa-tags"></i>Special PriceGet extra 20% off (price inclusive of discount)<Link to="/">T and C</Link></li>
                      <li>Bank Offer 10% off on SBI Credit Card, up to ₹1000. On orders of ₹5000 and above<Link to="/">T and C</Link></li>
                      <li>Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card<Link to="/">T and C</Link></li>
                      <li>Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition apply</li>
                      <li>No Cost EMI on Flipkart Axis Bank Credit Card <Link to="/">T and C</Link></li>
                  </ul>
               </p>
            </div>
          <div className="col-lg-6">
              <div className="row">
                 <div className="col-lg-6 ">
                 <button className="AddtoCart">Add to Cart</button>
                 </div>

                 <div className="col-lg-6 ">
                 <button className="BuyNow">Buy Now</button>
                 </div>

              </div>
             
             
             
          </div>
        </div>
  
</div>
)

}
export default ProductInfo;