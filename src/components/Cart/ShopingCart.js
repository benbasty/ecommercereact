import React from 'react'
import './Cart.css'
import {CiCircleRemove} from 'react-icons/ci'
import Img1 from '../../assets/img/products/f1.jpg'
import Img2 from '../../assets/img/products/f2.jpg'
import Img3 from '../../assets/img/products/f3.jpg'
import Img4 from '../../assets/img/products/f4.jpg'

const ShopingCart = () => {
  return (
    <section id='cart'>
        <table>
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><CiCircleRemove/></td>
                    <td><img src={Img1} alt="imgCart" /></td>
                    <td>Cartoon Astro Tees</td>
                    <td>$45.67</td>
                    <td><input type='number' placeholder='1'/></td>
                    <td>$45.67</td>
                </tr>
                <tr>
                    <td><CiCircleRemove/></td>
                    <td><img src={Img2} alt="imgCart" /></td>
                    <td>Cartoon Astro Tees</td>
                    <td>$45.67</td>
                    <td><input type='number' placeholder='1'/></td>
                    <td>$45.67</td>
                </tr>
                <tr>
                    <td><CiCircleRemove/></td>
                    <td><img src={Img3} alt="imgCart" /></td>
                    <td>Cartoon Astro Tees</td>
                    <td>$45.67</td>
                    <td><input type='number' placeholder='1'/></td>
                    <td>$45.67</td>
                </tr>
                <tr>
                    <td><CiCircleRemove/></td>
                    <td><img src={Img4} alt="imgCart" /></td>
                    <td>Cartoon Astro Tees</td>
                    <td>$45.67</td>
                    <td><input type='number' placeholder='1'/></td>
                    <td>$45.67</td>
                </tr>
            </tbody>
        </table>
        <div className='coupon'>
            <div className='apply-coupon'>
                <h4>Apply Coupon</h4>
                <div className='coupon-fill-form'>
                    <input type='text' placeholder='Enter Your Coupon' />
                    <button>Apply</button>
                </div>
            </div>
            <div className='cart-totals'>
                <h4>Cart Totals</h4>
                <table>
                    <tbody>
                        <tr>
                            <td>Cart Subtotal</td>
                            <td>$335</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Total</td>
                            <td>$335</td>
                        </tr>
                    </tbody>
                </table>
                <button>Proceed to checkout</button>
            </div>
        </div>

    </section>
  )
}

export default ShopingCart