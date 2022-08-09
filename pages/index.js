import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import PageTitle from '../components/pageTitle';

const fetcher = (...args) => fetch(...args).then(res => res.json())
 
const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher );
    
    return (
    <div>
         <PageTitle title='Home'/>
        <h1 className="mt-13 text-center text-2xl" >O estabelecimneto X sempre busca por atender melhor seus clientes.</h1>
        <div className='text-center my-12  '>
            <Link href="/search">
                <a className='bg-blue-400 px-6 py-4 font-bolt rounded-lg drop-shadow-lg hover:drop-shadow-2xl font-bold text-lg '>Dar opinião ou sugestão</a>
            </Link>
            
        </div>
        {/*condicional implícita de IF em React: se não tiver DATA ele mostra Carregando... se tiver ele mostra os dados em <p>*/}
        {!data && <p>Carregando...</p>}
            {data && data.showCoupon &&
            <p className='my-12 text-center'>
                {data.message}
                </p>}
    </div>
    
    )
}

export default Index