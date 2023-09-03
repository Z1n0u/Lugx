import './Banner.css'
import Button from '../Button/Button'
import Gamecard from '../../assets/images/banner-image.jpg'
import caption from '../../assets/images/caption-dec.png'


const Banner = () => {
    return(
    <div className='banner'>
        <div className='banner_div left'>
            <h6 className='banner_text_welcome'>welcome to lugx</h6>
            <div className='banner_left_cap_text_conatiner'>
            <h2 className='banner_text_title'>best gaming site ever!</h2>
            <img src={caption} className='banner_left_cap'></img>
            </div>
            <p className='banner_text_subtitle'>LUGX Gaming is a games key store where you find the best games with the best price possible.</p>
            <div className='banner_search'>
                <input type='text' placeholder='Type Something'></input>
                <Button/>
            </div>
        </div>
        <div className='banner_div right'>
            <img src={Gamecard} id='banner_img'></img>
            <span className='price'>20$</span>
            <span className='promo'>-40%</span>
        </div>
    </div>
    )
}

export default Banner