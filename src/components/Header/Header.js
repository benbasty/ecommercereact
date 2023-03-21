import './header.css';
import logo from '../../assets/img/logodb.png';
import {AiFillShopping, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';



function Header() {
    const nav = useRef();
    const showNavBar = () => {
        nav.current.classList.add('show');
    }
    const closeNavBar = () => {
        nav.current.classList.remove('show');
    }
    const [activeNav, setActiveNav] = useState('#');
    return(
        <section id="header">
            <a href='#logo'><img src={logo} className='logo' alt='logo'/></a>
            <div>
                <ul id='navbar' ref={nav}>
                    {/* later: use switch link to link multiple link with react */}
                    <li><Link to='/ecommercereact' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</Link></li>
                    <li><Link to='/ecommercereact/shop'onClick={() => setActiveNav('#shop')} className={activeNav === '#shop' ? 'active' : ''}>Shop</Link></li>
                    <li><Link to='/ecommercereact/blog' onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}>Blog</Link></li>
                    <li><Link to='/ecommercereact/about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</Link></li>
                    <li><Link to='/ecommercereact/contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</Link></li>
                    <li id='shopping-bag'><Link to='/ecommercereact/cart' onClick={() => setActiveNav('#shopping')} className={activeNav === '#shopping' ? 'active' : ''}><AiFillShopping/></Link></li>
                    <i id='close' onClick={closeNavBar}><AiOutlineClose /></i>
                </ul>
            </div>
            <div id='mobile'>
                <i id='shoppingcart'><AiFillShopping /></i>
                <i id='bar' onClick={showNavBar}><AiOutlineMenu /></i>
            </div>
        </section>
    )
}
export default Header;