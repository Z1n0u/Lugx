import './App.css'


import {Container} from './components/index'
import {Header , Banner , Footer } from './Sections/index'


const App = () => {
    return (
        <>
            <Header />
            <Container>
               <Banner/>
            </Container>
            
        </>
    )
}

export default App;