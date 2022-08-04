import React from 'react';
import Link from 'next/link';


const Header = () => {
return(
  <React.Fragment>
    <div className= 'bg-slate-800 p-4 drop-shadow-lg'>
    <div className='container mx-auto '>
      <Link href='/'><a>
      <img className='mx-auto' src="/logo_palpitebox.png" height="80" width="80"/>
        </a></Link>
       
    </div>
  </div>
  <div className= 'bg-slate-700 p-4 drop-shadow-lg text-center' >
            <Link href="/about" >
                <a className='px-2 hover:underline text-gray-50'>Sobre</a>
            </Link>
            
            <Link href="/contact" >
                <a className='px-2 hover:underline text-gray-50'>Contato</a>
            </Link>
            
            <Link href="/search" >
                <a className='px-2 hover:underline text-gray-50'>Pesquisa</a>
            </Link>

  </div>
  </React.Fragment>
)
}
export default Header