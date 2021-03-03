import Navbar_component from '../components/Navbar_component.js';
import Img_slider from '../components/Img_slider.js';
function Home()
{
    return(
        <div>
            <Navbar_component />
            <Img_slider />
            <h1>Home Screen</h1>
        </div>
    );
}
export default Home;