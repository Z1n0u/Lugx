import './MostPlayedCards.css'
import  MostPlayedCardImg  from "../../assets/images/top-game-01.jpg"
import Button from '../Button/Button'

function MostPlayedCards({img,subtitle,title}) {
  return (
    <div className="MostPlayed_card">
        <img src={img} alt="" className='MostPlayed_img'></img>
        <div className='MostPlayed_Content'>
            <span className="MostPlayed_subtitle">{subtitle}</span>
            <h4 className="MostPlayed_title">{title}</h4>
        </div>
        <div className='MostPlayed_ButtonWrapper'>
            <Button buttonStyle={"btn-primary"} buttonSize={"btn-mid"}>explore</Button>
        </div>
    </div>
  )
}

export default MostPlayedCards