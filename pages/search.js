import React from 'react'
import Link from 'next/Link'

const Search = () => {
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opiniao.</p>
            <div className='w-48 mx-auto '>
                <label className='font-bold ' >Seu nome:</label>
                <input type='text' className='p-4 block drop-shadow-lg bg-blue-100 m-2 rounded'/>
            </div>
           
        </div>
    )
}
export default Search