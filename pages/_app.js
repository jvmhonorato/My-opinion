import React from 'react';
import Layout from '../components/layout';
import { ThemeProvider } from 'next-themes'

import '../css/styles.css'

const MyApp = ({ Component, pageProps }) => {
    return (
      <ThemeProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
    </ThemeProvider>
    
    )
}

export default MyApp