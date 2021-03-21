import Navbar_component from '../components/Navbar_component.js';
import Img_slider from '../components/Img_slider.js';
import My_cart_component from '../components/My_cart_component';
import productImage from '../images/product.jpg';
import productImage1 from '../images/watch.jpg';
import '../App.css'
function Home()
{
    return(

    
<div >
            <Navbar_component />
            <Img_slider />
            <h1 className=" myheading text-center">My products</h1>
    <div className="row">

         <div classNAme="col-lg-3">
         <My_cart_component product_name="Running Shoes For Men(Red)" product_price="Rs 566"
              product_description="Best shoes for outdoor activities" product_image={productImage}
            />
         </div>

         <div classNAme="col-lg-3">
         <My_cart_component product_name="Couple Analogue Stainless Steel Black Dial Analog Watch - For Men" product_price="₹215"
              product_description="a quality assured product good display ,free style" product_image={productImage1}
             />
        </div>

        
            

             
    </div>
            
</div>

      
    );
}
export default Home;