import React, { Component } from 'react';
import './Home.css'
import styles from './Home.module.css'
import Header from './Header';
import ProductList from './ProductList';
function Home(props) {
    return (
        <div>
            <Header></Header>
            <ProductList></ProductList>
            
        </div>
    )
}
  
export default Home;