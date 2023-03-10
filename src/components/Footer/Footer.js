import './footer.css';
import app from '../../assets/img/pay/app.jpg';
import play from '../../assets/img/pay/play.jpg';
import pay from '../../assets/img/pay/pay.png';
import {FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube} from 'react-icons/fa';


function Footer() {
    return(
        <footer>
            <div className='main-footer'>
                <div className='contact'>
                    <h4>Contact</h4>
                    <p><span>Address</span>: 562 Wellington Road, Street 32, San Francisco</p>
                    <p><span>Phone</span>: +01222365 /(+91)0123456789</p>
                    <p><span>Hours</span>: 10:00 - 18:00, Mon - Sat</p>
                    <h4 className='follow'>Follow Us</h4>
                    <div className='socials'>
                        <a href='#facebook' className='icon'><FaFacebookF /></a>
                        <a href='#twitter' className='icon'><FaTwitter /></a>
                        <a href='#instagram'className='icon'><FaInstagram /></a>
                        <a href='#pinterest' className='icon'><FaPinterestP /></a>
                        <a href='#youtube' className='icon'><FaYoutube /></a>
                    </div>
                    
                </div>
                <div className='about'>
                    <h4>About</h4>
                    <a href='#about'>About Us</a>
                    <a href='#delivery'>Delivery Information</a>
                    <a href='#privacy'>Privacy Policy</a>
                    <a href='#terms'>Terms and Conditions</a>
                    <a href='#contact'>Contact Us</a>
                </div>
                <div className='account'>
                    <h4>My account</h4>
                    <a href='#signin'>Sign in</a>
                    <a href='#cart'>View Cart</a>
                    <a href='#whislist'>My WishList</a>
                    <a href='#tracking'>Track My Order</a>
                    <a href='#help'>Help</a>
                </div>
                <div className='app'>
                    <h4>Install App</h4>
                    <p>From App Store or Google Pay</p>
                    <div className='download-img'>
                        <img src={app} alt='app'/>
                        <img src={play} alt='play'/>
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={pay} alt='pay' className='pay'/>
                </div>
            </div>
            <div className='copyright'>
                <p>&copy; 2022 Ben Basty - HTML CSS Javascript React Ecommerce Template</p>
            </div>
        </footer>
    )
}
export default Footer;