import './smallBanners.css';
import { Link } from 'react-router-dom';

function smallBanners() {
    return(
        <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2>buy 1 get 1 free</h2>
                <p>The best class dress is on sale at Cara</p>
                <button><Link to='/ecommercereact/shop'>Learn more</Link></button>
            </div>
            <div className="banner-box">
                <h4>spring/summer</h4>
                <h2>upcoming season</h2>
                <p>The best class dress is on sale at Cara</p>
                <button><Link to='/ecommercereact/shop'>Collection</Link></button>
            </div>
        </section>
    )
}
export default smallBanners;