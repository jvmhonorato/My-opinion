import React, { Children } from 'react';
import Footer from '../footer';
import Header from '../header';

const Layout = ({children}) => {
    return (
        <div >
          <Header/>
           <div className='container mx-auto h-screen' >
            {children}
           </div>
           <Footer/>
          
        </div>
    )
}
export default Layout