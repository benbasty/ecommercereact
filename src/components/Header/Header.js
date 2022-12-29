import './header.css';
import logo from '../../assets/img/logo.png';
import {AiFillShopping} from 'react-icons/ai';
function Header() {
    return(
        <section id="header">
            <a href='#logo'><img src={logo} className='logo' alt='logo'/></a>
            <div>
                <ul id='navbar'>
                    {/* later: use switch link to link multiple link with react */}
                    {/* later: add the active code to each links */}
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#shop'>Shop</a></li>
                    <li><a href='#blog'>Blog</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li><a href='#home'><AiFillShopping/></a></li>
                </ul>
            </div>
        </section>
    )
}
export default Header;