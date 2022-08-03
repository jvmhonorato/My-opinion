import React from 'react';

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <div>
          <h1 className=' bg-yellow-100 sm:bg-gray-700 md:bg-red-900 p-8 lg:bg-purple-600'>MyApp</h1>
    
          <Component {...pageProps}/>
        </div>
    
    
    )
}

export default MyApp