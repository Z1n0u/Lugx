import './TrendingGames.css'

import TrendingGamesCard from '../../components/TrendingGamesCards/TrendingGamesCard'
import TrendingGamesCardData from '../../Data/TrendingGamesCardsData'
import SectionsSubtitle from '../../components/SectionsSubtitle/SectionsSubtitle'
import SectionsTitleButton from '../../components/SectionsTitleButton/SectionsTitleButton'

function TrendingGames() {
    const TrendingGamesCards=TrendingGamesCardData.map(card => {
        return <TrendingGamesCard price={card.price} img={card.img} span={card.span} title={card.title} />
    }) 

  return (
    <div className='TrendingGamesWrapper'>
        <div className='TrendingGamesYaxis'>
                <SectionsSubtitle>Trending</SectionsSubtitle>
                <SectionsTitleButton>Trending Games</SectionsTitleButton>
            <div className='TrendingGames_GamesCardsWrapper'>
                {TrendingGamesCards}
            </div>
        </div>
    </div>
  )
}

export default TrendingGames