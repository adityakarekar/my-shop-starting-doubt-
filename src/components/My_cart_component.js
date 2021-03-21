import {Card,Button} from 'react-bootstrap';
import productImage from '../images/product.jpg';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

function My_cart_component (props)
{
    return(
        < Link to ="/ProductInfo">

   <div className="myCart">
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.product_image} />
  <Card.Body>
    <Card.Title>{props.product_name}</Card.Title>
    <Card.Text>
     {props.product_price}
    </Card.Text>

    <Card.Text>
     {props.product_description}
    </Card.Text>
    <Button variant="primary" className="mx-auto d-block">Buy Now</Button>
  </Card.Body>
</Card>



 </div>
 </Link>

    )
}
export default  My_cart_component;