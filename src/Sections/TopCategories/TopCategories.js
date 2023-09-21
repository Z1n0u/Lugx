import './TopCategories.css'

import SectionsSubtitle from "../../components/SectionsSubtitle/SectionsSubtitle"
import TopCategoriesCards from '../../components/Top Categories Cards/TopCategoriesCards'
import TopCategoriesCardsInfo from '../../Data/TopCategoriesCardsDATA'

function TopCategories() {
    const TopCategoriesCardsARRAY= TopCategoriesCardsInfo.map(card => {
        return <TopCategoriesCards img={card.img} span={card.span} />
    })

  return (
    <div className="TopCategoriesWrapper">
        <SectionsSubtitle>CATEGORIES</SectionsSubtitle>
        <h2 className="TopCategories_Title">Top Categories</h2>
        <div className='TopCategoriesCardsWrapper'>
            {TopCategoriesCardsARRAY}
        </div>
    </div>
  )
}

export default TopCategories