import React from 'react';
import Header from '../Header/Header';
import Foods from '../Foods/Foods';
import Testimonial from '../Testimonial/Testimonial';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header />
            <Foods />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default Home;