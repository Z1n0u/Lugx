import './TrendingGamesCard.css'
import {FaBagShopping} from 'react-icons/fa6'

function TrendingGamesCard( {price, img , span, title}) {
    return (
            
                <div className='TrendingGames_GamesCard'>
                    <span className='price'>{price}</span>
                    <img src={img} className='TrendingGames_GamesCard_Img'></img>
                    <div className='TrendingGames_GamesCard_content'>
                        <div className='TrendingGames_GamesCard_content_Text'>
                            <span>{span}</span>
                            <h4 className='TrendingGames_GamesCard_content_Title'>{title}</h4>
                        </div>
                        <span className='ShoppingProduct' style={{'color' : 'white'}}><FaBagShopping/> </span> 
                    </div>
                </div>
    
  )
}

export default TrendingGamesCard