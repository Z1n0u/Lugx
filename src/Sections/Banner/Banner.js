import './Banner.css'
import Button from '../../components/Button/Button'
import Gamecard from '../../assets/images/banner-image.jpg'
import caption from '../../assets/images/caption-dec.png'
import ButtomCards from './buttom cards/ButtomCards'


import { useState } from 'react'
import buttomcardsinfo from '../../Data/ButtomBannerCardsData'


const Banner = () => {
    const [banner,setbanner]=useState(false)

    const buttomcards = buttomcardsinfo.map(card => {
        return <ButtomCards key={card.key} icon={card.icon} title={card.title}/>;
    })

    const changeBannerPaddingTop = () => {
        if(window.scrollY >= 100){
            
            setbanner(true)
        }
        else{
            setbanner(false)
        }
    }

    window.addEventListener("scroll",changeBannerPaddingTop)
    return(
        <div className={!banner ? 'banner' : 'banner active'}>
            <div className='banner_div left'>
                <h6 className='banner_text_welcome'>welcome to lugx</h6>
                <div className='banner_left_cap_text_conatiner'>
                <h2 className='banner_text_title'>best gaming site ever!</h2>
                <img src={caption} className='banner_left_cap' alt=''></img>
                </div>
                <p className='banner_text_subtitle'>LUGX Gaming is a games key store where you find the best games with the best price possible.</p>
                <div className='banner_search'>
                    <input type='text' placeholder='Type Something'></input>
                    <Button buttonStyle={"btn-primary"} buttonSize={"btn-large"}>Search NOW</Button>
                </div>
            </div>
            <div className='banner_div right'>
                <img src={Gamecard} id='banner_img' alt=''></img>
                <span className='price'>20$</span>
                <span className='promo'>-40%</span>
            </div>
            <div className='banner_buttom_cards'>
                {buttomcards}
            </div>
        </div>
    )
}

export default Banner