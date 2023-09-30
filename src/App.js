import './App.css'


import {Container} from './components/index'
import {Header , Banner ,TrendingGames ,MostPlayed,TopCategories, Footer, Gallery } from './Sections/index'


const App = () => {
    return (
        <>
            <Header />
            <Container>
               <Banner/>
               <TrendingGames/>
               <MostPlayed/>
               <TopCategories/>
               <Gallery/>
            </Container>
            <Footer/>
            
        </>
    )
}

export default App;