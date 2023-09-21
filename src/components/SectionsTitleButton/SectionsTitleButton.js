import './SectionsTitleButton.css'
import Button from '../Button/Button'

function SectionsTitleButton({children}) {
  return (
    <div className='TrendingGamesTitle_Button'>
                <h2 className='title'>{children}</h2>
                <Button buttonStyle={'btn-primary'} buttonSize={'btn-large'} children={'view all'}></Button>
    </div>
  )
}

export default SectionsTitleButton