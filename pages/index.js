import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
    <div>
        <h1>Hello world</h1>
        <div>
            <Link href="/about" >
                <a>Sobre</a>
            </Link>
            <br/>
            <Link href="/contact" >
                <a>Contato</a>
            </Link>
            <br/>
            <Link href="/search" >
                <a>Pesquisa</a>
            </Link>
        </div>
    </div>
    )
}

export default Index