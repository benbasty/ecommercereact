import React from 'react'
import './Cart.css'
import CartHeader from './CartHeader'
import ShopingCart from './ShopingCart'

const Cart = () => {
  return (
    <section className='section-p1'>
        <CartHeader />
        <ShopingCart />
    </section>
  )
}

export default Cart