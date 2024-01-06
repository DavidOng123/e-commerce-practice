import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header'
import App from '../Components/App'
import Footer from '../Components/Footer';

const AppRouter=()=>(
    <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        <Footer/>
    </Router>
)


export default AppRouter;