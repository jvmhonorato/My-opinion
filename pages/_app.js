import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div >
          <Header/>
           <div className='container mx-auto h-screen' >
              <Component {...pageProps}/>
           </div>
           <Footer/>
          
        </div>
    
    
    )
}

export default MyApp