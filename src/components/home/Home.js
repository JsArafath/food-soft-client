import React from 'react';
import About from '../about/About';
import Banner from '../banner/Banner';
import Gallary from '../gallary/Gallary';
import Products from '../products/Products';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
// import Articles from '../articles/Articles';
import Blogs from '../blogs/Blogs'
import Visit from '../visit/Visit'
import Choose from '../choose/Choose'
import Farmers from '../farmers/Farmers'
const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <br></br>
            <br></br>
            <Products></Products> 
            <br></br>
            <br></br>
            <About></About>
            <br></br>
            <br></br>
            <Gallary></Gallary>
            <br></br>
            <br></br>
            <Visit></Visit>
            <br></br>
            <br></br>
            <Choose></Choose>
            <br></br>
            <br></br>
            <Farmers></Farmers>
            <br></br>
            <br></br>
            <Blogs></Blogs>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;