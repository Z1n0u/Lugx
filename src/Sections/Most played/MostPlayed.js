import './MostPlayed.css'

import SectionsSubtitle from '../../components/SectionsSubtitle/SectionsSubtitle'
import SectionsTitleButton from '../../components/SectionsTitleButton/SectionsTitleButton'
import MostPlayedCards from '../../components/MostPlayedCards/MostPlayedCards'
import MostPlayedCardsInfo from '../../Data/MostPlayedCardsData'

function MostPlayed() {
    const MostPlayedCardsARRAY = MostPlayedCardsInfo.map(card => {
        return <MostPlayedCards img= {card.img} subtitle={card.span} title={card.title} />
    })

  return (
    <div className='MostPlayedWrapper'>
        <div className='MostPlayedYaxis'>
                <SectionsSubtitle>Trending</SectionsSubtitle>
                <SectionsTitleButton>Trending Games</SectionsTitleButton>
            <div className='MostPlayed_GamesCardsWrapper'>
                {MostPlayedCardsARRAY}
            </div>
        </div>
    </div>
  )
}

export default MostPlayed