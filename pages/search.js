import React from 'react'
import Link from 'next/Link'

const Search = () => {

    //Função responsável em mandar os dador pra API
    const save = async () => {
       const form = {
        Nome:'Agda',
        Email:'agda@gmail.com',
        Whatsapp:'71 986554514'
       }
       try {
       const response = await fetch('/api/save' , {
        method: 'POST',
        body:JSON.stringify(form)
       })
       const data = response.json()
       console.log(data)
    }catch(err) {
         
    }
    }
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opiniao.</p>
            <div className='w-48 mx-auto '>
                <label className='font-bold ' >Seu nome:</label>
                <input type='text' className='p-4 block drop-shadow-lg bg-blue-100 m-2 rounded'/>
                <button className={'bg-blue-400 px-6 py-4 font-bolt rounded-lg drop-shadow-lg hover:drop-shadow-2xl font-bold text-lg'} onClick={save}>Salvar</button>
            </div>
           
        </div>
    )
}
export default Search