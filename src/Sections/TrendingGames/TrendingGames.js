import './TrendingGames.css'

import TrendingGamesCard from '../../components/TrendingGamesCards/TrendingGamesCard'
import Button from '../../components/Button/Button'
import TrendingGamesCardData from '../../Data/TrendingGamesCardsData'



function TrendingGames() {
    const TrendingGamesCards=TrendingGamesCardData.map(card => {
        return <TrendingGamesCard price={card.price} img={card.img} span={card.span} title={card.title} />
    }) 

  return (
    <div className='TrendingGamesWrapper'>
        <div className='TrendingGamesYaxis'>
            <h6 className='subtitle'>TRENDING</h6>
            <div className='TrendingGamesTitle_Button'>
                <h2 className='title'>Trending Games</h2>
                <Button buttonStyle={'btn-primary'} buttonSize={'btn-large'} children={'view all'}></Button>
            </div>
            <div className='TrendingGames_GamesCardsWrapper'>
                {TrendingGamesCards}
            </div>
        </div>
    </div>
  )
}

export default TrendingGames