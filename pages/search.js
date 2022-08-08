import React,{useState} from 'react'
import Link from 'next/Link'

const Search = () => {
    const [form, setForm] = useState({
        Nome:'',
        Email:'',
        Whatsapp:''
       })

    //Função responsável em mandar os dador pra API
    const save = async () => {
       
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
    const onChange = evt => {
        //captura a propriedade name no <input>
        const key = evt.target.name
        //tem que fazer uma validação pra funcionar como valor no setForm
        const value = evt.target.value
        //pega tudo do formulário antigo e copia
        setForm(old => ({
            ...old,
            [key]: value
        }) )
    }
    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
            <p className='text-center'>O restaurante X sempre busca por atender melhor seus clientes.<br/>
            Por isso, estamos sempre abertos a ouvir a sua opiniao.</p>
            <div className='w-48 mx-auto '>

                <label className='font-bold ' >Seu nome:</label>
                <input type='text' className='p-4 block drop-shadow-lg bg-blue-100 m-2 rounded' placeholder='Nome' onChange={onChange} name='Nome'/>
                <label className='font-bold ' >Seu email:</label>
                <input type='text' className='p-4 block drop-shadow-lg bg-blue-100 m-2 rounded' placeholder='Email' onChange={onChange} name='Email'/>
                <label className='font-bold ' >Seu Whatsapp:</label>
                <input type='text' className='p-4 block drop-shadow-lg bg-blue-100 m-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp'/>
            
                <button className={'bg-blue-400 px-6 py-4 font-bolt rounded-lg drop-shadow-lg hover:drop-shadow-2xl font-bold text-lg'} onClick={save} >Salvar
                </button>
                <pre>
                    {JSON.stringify(form, null, 2)}
                </pre>
            </div>
           
        </div>
    )
}
export default Search