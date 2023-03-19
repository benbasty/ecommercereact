import MainImg from '../../assets/img/products/f1.jpg'
import SecondImg from '../../assets/img/products/f2.jpg'
import ThirdImg from '../../assets/img/products/f3.jpg'
import FourthImg from '../../assets/img/products/f4.jpg'
import './ProductPage.css'
import FeaturedProducts from '../Products/FeaturedProducts'
import NewsLetter from '../NewsLetter/NewsLetter'
import { description } from 'calculator'
import { useState } from 'react'

const images = [
    {
        id: 1,
        url: MainImg,
        description: 'productImg1'
    },
    {
        id: 2,
        url: SecondImg,
        description: 'productImg2'
    },
    {
        id: 3,
        url: ThirdImg,
        description: 'productImg3'
    },
    {
        id: 4,
        url: FourthImg,
        description: 'productImg4'
    }
]
const ProductPage = () => {
    const [mainImage, setMainImage] = useState(images[0]);
    return(
        <div>
            <section id="product-details" className="section-p1" >
                <div className="single-product-image">
                    <img src={mainImage.url} width="100%" id="MainImg" alt={mainImage.description}/>

                    <div className='small-image-group'>
                        {
                            images.map(image => (
                                <div key={image.id} className='small-image-column'>
                                    <img
                                    src={image.url}
                                    alt={description}
                                    className='small-image'
                                    width="100%"
                                    onClick={() => setMainImage(image)}
                                    />
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className="single-product-details">
                    <h6>Home / T-shirt</h6>
                    <h4>Men's Fashion T-shirt</h4>
                    <h2>$139.00</h2>
                    <select>
                        <option>Select Size</option>
                        <option>XL</option>
                        <option>XXL</option>
                        <option>Small</option>
                        <option>Large</option>
                    </select>
                    <input type="number" placeholder="1"/>
                    <button className='btn'>Add to Cart</button>
                    <h4>Product Details</h4>
                    <span>The Gildan Ultra Cotton T-shirt is made
                        from a substantial 6.0 oz. per sq. yd.
                        fabric constructed from 100% cotton,
                        this classic fit preshrunk jersey knit
                        provides unmatched comfort with each wear.
                        Featuring a taped neck and shoulder, and a
                        seamless double-needle collar, and availanle
                        in a range of colors, it offers it all in the
                        ultimate head-turning package.
                    </span>
                </div>

            </section>
            <FeaturedProducts />
            <NewsLetter />
        </div>
    )
}
export default ProductPage;