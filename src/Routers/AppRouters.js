import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../Components/Header'
import App from '../Components/App'
import Product from '../Components/Product'
import Footer from '../Components/Footer';
import ProductDetails from '../Components/ProductDetails'

const AppRouter=()=>(
    <Router>
        <Header/>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/product/:id' element={<ProductDetails/>}/>
            </Routes>
        <Footer/>
    </Router>
)


export default AppRouter;