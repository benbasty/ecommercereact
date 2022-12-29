import './header.css';
import logo from '../../assets/img/logo.png';
import {AiFillShopping, AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useRef } from 'react';



function Header() {
    const nav = useRef();
    const showNavBar = () => {
        nav.current.classList.add('show');
    }
    const closeNavBar = () => {
        nav.current.classList.remove('show');
    }
    
    return(
        <section id="header">
            <a href='#logo'><img src={logo} className='logo' alt='logo'/></a>
            <div>
                <ul id='navbar' ref={nav}>
                    {/* later: use switch link to link multiple link with react */}
                    {/* later: add the active code to each links */}
                    <li><a href='#home' className='active'>Home</a></li>
                    <li><a href='#shop'>Shop</a></li>
                    <li><a href='#blog'>Blog</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    <li id='shopping-bag'><a href='#shopping'><AiFillShopping/></a></li>
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