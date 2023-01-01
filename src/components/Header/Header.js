import './header.css';
import logo from '../../assets/img/logo.png';
import {AiFillShopping, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useRef, useState } from 'react';



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
                    <li><a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a></li>
                    <li><a href='#shop'onClick={() => setActiveNav('#shop')} className={activeNav === '#shop' ? 'active' : ''}>Shop</a></li>
                    <li><a href='#blog' onClick={() => setActiveNav('#blog')} className={activeNav === '#blog' ? 'active' : ''}>Blog</a></li>
                    <li><a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
                    <li><a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a></li>
                    <li id='shopping-bag'><a href='#shopping' onClick={() => setActiveNav('#shopping')} className={activeNav === '#shopping' ? 'active' : ''}><AiFillShopping/></a></li>
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