import React, { useState } from 'react';

import PageTitle from '../components/pageTitle';

const Search = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
  });
  const notas = [0, 1, 2, 3, 4, 5];
  const [success, setSuccess] = useState(false);
  const [retorno, setRetorno] = useState({});

  //Função responsável em mandar os dador pra API
  const save = async () => {
    //acrecentei esse Return pra não ficar chamando a API

    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form),
      });
      const data = await response.json();
      setSuccess(true);
      setRetorno(data);
    } catch (err) {}
  };
  const onChange = (evt) => {
    //captura a propriedade name no <input>
    const key = evt.target.name;
    //tem que fazer uma validação pra funcionar como valor no setForm
    const value = evt.target.value;
    //pega tudo do formulário antigo e copia
    setForm((old) => ({
      ...old,
      [key]: value,
    }));
  };
  return (
    <div className=" flex h-screen pt-36 align-middle justify-center ">
      <div className="">
        <PageTitle title="Pesquisa" />
        <h1 className="text-center font-bold my-4 text-2xl">
          Críticas e sugestões
        </h1>
        <p className="text-center">
          O restaurante X sempre busca por atender melhor seus clientes.
          <br />
          Por isso, estamos sempre abertos a ouvir a sua opiniao.
        </p>

        {!success && (
          <div className="flex flex-col ">
            <label className="font-bold ">Seu nome:</label>
            <input
              type="text"
              className="p-4 block drop-shadow-lg bg-blue-100 m-2 rounded"
              placeholder="Nome"
              onChange={onChange}
              name="Nome"
            />
            <label className="font-bold ">Seu email:</label>
            <input
              type="text"
              className="p-4 block drop-shadow-lg bg-blue-100 m-2 rounded"
              placeholder="Email"
              onChange={onChange}
              name="Email"
            />
            <label className="font-bold ">Seu Whatsapp:</label>
            <input
              type="text"
              className="p-4 block drop-shadow-lg bg-blue-100 m-2 rounded"
              placeholder="Whatsapp"
              onChange={onChange}
              name="Whatsapp"
            />
            <div className=" flex p-6">
              {notas.map((nota) => {
                return (
                  <label className="block w-1/6">
                    {nota}
                    <br />
                    <input
                      type="radio"
                      name="Nota"
                      value={nota}
                      onChange={onChange}
                    />
                  </label>
                );
              })}
            </div>

            <button
              className={
                'bg-blue-400 px-6 py-4 font-bolt rounded-lg drop-shadow-lg hover:drop-shadow-2xl font-bold text-lg'
              }
              onClick={save}
            >
              Salvar
            </button>
          </div>
        )}
      </div>
      {success && (
        <div className="w-48 mx-auto ">
          <p className="mt-6 mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3">
            {' '}
            Obrigado por contribui com sua sugestão ou crítica.
          </p>
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-6">
              <span className="font-bold  text- xl">{retorno.Cupom}</span>
            </div>
          )}
          {retorno.showCoupon && (
            <div className="text-center border p-4 mb-6">
              <span className="font-bold block mb-2 ">{retorno.Promo}</span>
              <br />
              Tire uma foto ou print dessa tela e mostre ao garçom
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Search;
