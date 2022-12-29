import './newsletter.css';
function NewsLetter() {
    return(
        <section id='newsletter' className='section-p1 section-m1'>
            <div className='newsText'>
                <h4>Sign Up for NewsLetter</h4>
                <p>Get E-mail updates about our latest shop and <span>special offers</span>.</p>
            </div>
            <div className='form'>
                <form>
                    <input type='email' placeholder='Your email address' />
                    <button>Sign Up</button>
                </form>
            </div>
        </section>
    )
}
export default NewsLetter;