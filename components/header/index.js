import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <React.Fragment>
      <div className="w-full ">
        <div className="bg-slate-800 p-4 drop-shadow-lg">
          <div className="container mx-auto ">
            <Link href="/">
              <p>
                <img
                  className="mx-auto"
                  src="/myopinion-1.png"
                  height="80"
                  width="80"
                />
              </p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-between  items-center bg-slate-700 p-4 drop-shadow-lg ">
          <div >
          
            
          </div >
          <BsFillSunFill className='shadow-md hover:bg-yellow-300 border border-slate-600 p-1 rounded-full w-12 h-8' onClick={() => setTheme('light')}/>
          <div className=" flex justify-center  items-center bg-slate-700 p-4 drop-shadow-lg ">
            <Link href="/about">
              <p className="px-2  hover:underline text-gray-50">Sobre</p>
            </Link>

            <Link href="/contact">
              <p className="px-2 hover:underline text-gray-50">Contato</p>
            </Link>

            <Link href="/search">
              <p className="px-2 hover:underline text-gray-50">Pesquisa</p>
            </Link>
          </div>
          <BsFillMoonFill className='shadow-md border-slate-600 hover:bg-indigo-400 border p-1 rounded-full w-12 h-8'  onClick={() => setTheme('dark')}/>
          <div>
          
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
