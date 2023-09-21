import './App.css'


import {Container} from './components/index'
import {Header , Banner ,TrendingGames ,MostPlayed,TopCategories, Footer } from './Sections/index'


const App = () => {
    return (
        <>
            <Header />
            <Container>
               <Banner/>
               <TrendingGames/>
               <MostPlayed/>
               <TopCategories/>
            </Container>
            
        </>
    )
}

export default App;