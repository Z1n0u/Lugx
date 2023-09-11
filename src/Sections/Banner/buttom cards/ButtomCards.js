import './ButtomCards.css'


function ButtomCards({icon , title}) {
  return (
    <div className='banner_buttom_card'>
                <div className='banner_buttom_icon_wrapper'>
                    <img src={icon} className='banner_buttom_icon' alt=''></img>
                </div>
                <h4>{title}</h4>
    </div>
  )
}

export default ButtomCards