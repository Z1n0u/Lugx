import './App.css'


import {Container} from './components/index'
import {Header , Banner ,TrendingGames , Footer } from './Sections/index'


const App = () => {
    return (
        <>
            <Header />
            <Container>
               <Banner/>
               <TrendingGames/>
            </Container>
            
        </>
    )
}

export default App;