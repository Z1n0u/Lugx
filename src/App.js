import './App.css'


import {Header , Container, Banner , Footer } from './components/index'

const App = () => {
    return (
        <>
            <Header />
            <Container>
                <Banner/>
            </Container>
            <Footer />
        </>
    )
}

export default App;