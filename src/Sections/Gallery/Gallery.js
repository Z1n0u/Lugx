import './Gallery.css'
import SectionSubtitle from '../../components/SectionsSubtitle/SectionsSubtitle'
import Button from '../../components/Button/Button'
import  GalleryIMG  from '../../assets/images/cta-bg.jpg'

function Gallery() {
  return (
    <div className='GalleryWrapper'>
      <div className='GalleryWrapper_inner'>
          <div className='GalleryIMG'> 
              <img src={GalleryIMG}></img>
          </div>
          <div className="ourshopcard">
              <SectionSubtitle>our shop</SectionSubtitle>
              <h2 className='GalleryTitle1'>Go Pre-Order Buy & Get Best <span style={{color : "#0071F8"}}>Prices</span> For You!</h2>
              <p className='GalleryPARAGRAPH'>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
              <Button buttonSize={"btn-large"} buttonStyle={"btn-primary"}>shop now</Button>
          </div>
          <div className="newsletter">
              <SectionSubtitle>NEWSLETTER</SectionSubtitle>
              <h2 className='GalleryTitle1'>Get Up To $100 Off Just Buy <span style={{color : "#0071F8"}}>Subscribe</span> Newsletter! </h2>
              <div className='Gallery_search'>
                <input type='text' placeholder='Your Email...'></input>
                <Button buttonSize={"btn-large"} buttonStyle={"btn-primary"}>Subscribe now</Button>
              </div>
          </div>
      </div>
        
    </div>
  )
}

export default Gallery