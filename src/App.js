import './App.css'

import {Header , Container , Footer } from './components/index'

const App = () => {
    return (
        <>
            <Header />
            <Container>
                child of container
            </Container>
            <Footer />
        </>
    )
}

export default App;