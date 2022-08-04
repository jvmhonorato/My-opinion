import React from 'react';
import Link from 'next/link';

const Index = () => {
    return (
    <div>
        <h1 className="mt-13 text-center text-2xl" >O estabelecimneto X sempre busca por atender melhor seus clientes.</h1>
        <div className='text-center my-12  '>
            <Link href="/">
                <a className='bg-blue-400 px-6 py-4 font-bolt rounded-lg drop-shadow-lg hover:drop-shadow-2xl font-bold text-lg '>Dar opinião ou sugestão</a>
            </Link>
        </div>
    </div>
    
    )
}

export default Index