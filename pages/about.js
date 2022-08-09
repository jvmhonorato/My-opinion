import React from 'react' 
import Link from 'next/dist/client/link'
import PageTitle from '../components/pageTitle'

const About = () => {
    return (
    <div>
        <h1>Sobre</h1>
        <PageTitle title='Sobre'/>
        <Link href="/" >
            <a>
                Home
            </a>
        </Link>
        </div>
    )
}

export default About