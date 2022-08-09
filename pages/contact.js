import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/pageTitle'

const Contact = () => {
    return (
        <div>
            <h1>Contato</h1>
            <PageTitle title='Contato'/>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
}
export default Contact