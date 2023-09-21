import './TopCategoriesCard.css'


function TopCategoriesCards({img , span}) {

  return (
    <div className="TopCategories_Card">
        <span className='TopCategories_TITLE'>{span}</span>
        <img src={img} alt="" className="TopCategories_img"></img>
    </div>
  )
}

export default TopCategoriesCards