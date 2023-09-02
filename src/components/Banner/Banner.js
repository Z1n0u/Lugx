import './Banner.css'
import Button from '../Button/Button'


const Banner = () => {
    return(
    <div className='banner'>
        <div className='banner_div left'>
            <h6 className='banner_text_welcome'>welcome to lugx</h6>
            <h2 className='banner_text_title'>best gaming site ever!</h2>
            <p className='banner_text_subtitle'>LUGX Gaming is a games key store where you find the best games with the best price possible.</p>
            <div className='banner_search'>
                <input type='text' placeholder='Type Something'></input>
                <Button/>
            </div>
        </div>
    </div>
    )
}

export default Banner