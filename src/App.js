import React from 'react';
import Header from '../src/components/Header/Header'
import Foods from '../src/components/Foods/Foods'
import Footer from '../src/components/Footer/Footer'
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div>
      <Header />
      <Foods />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
