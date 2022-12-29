import './feature.css';
import feature1 from '../../assets/img/features/f1.png';
import feature2 from '../../assets/img/features/f2.png';
import feature3 from '../../assets/img/features/f3.png';
import feature4 from '../../assets/img/features/f4.png';
import feature5 from '../../assets/img/features/f5.png';
import feature6 from '../../assets/img/features/f6.png';
function Feature() {
    return(
        <section id="feature" className='section-p1'>
            <div className='feature-box'>
                <img src={feature1} alt='free shipping'/>
                <h6>Free Shipping</h6>
            </div>
            <div className='feature-box'>
                <img src={feature2} alt='online order'/>
                <h6>Online Order</h6>
            </div>
            <div className='feature-box'>
                <img src={feature3} alt='save money'/>
                <h6>Save Money</h6>
            </div>
            <div className='feature-box'>
                <img src={feature4} alt='promo'/>
                <h6>Promotions</h6>
            </div>
            <div className='feature-box'>
                <img src={feature5} alt='happy sell'/>
                <h6>Happy Sell</h6>
            </div>
            <div className='feature-box'>
                <img src={feature6} alt='support'/>
                <h6>24/7 Support</h6>
            </div>
        </section>
    )
}
export default Feature;