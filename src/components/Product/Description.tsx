import React, { useState } from "react";
import { Modal } from "./Modal";
// <!--
//     nombre del objeto
//     titulo
//     pertenece a que tipo(categoria del objeto)
//     precio
//     description
//     {color , cantidad , precio}
//     boton de comprar
//  -->

export const Description = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  const id = urlParams.get("id");
  const product = urlParams.get("product");
  const priceString = urlParams.get("price");
  const price = priceString !== null ? parseFloat(priceString) : 0; 
  // console.log("los datos recibidos son : " + id )
  // console.log("los datos recibidos son : " + product )
  // console.log("los datos recibidos son : " + price )

  const [modal, setModal] = useState(false);
  
  const handleModal = (bool: boolean) => {
    setModal(bool);
    console.log("abriendo modal");
  };


  return (
    <div className="bg-stone-900 text-slate-200 p-10 flex flex-col gap-4 relative ">
      <p className="uppercase text-yellow-500">chairs</p>
      <h1 className="text-3xl font-semibold"> {product} </h1>
      <h2 className="text-slate-400">objetcs home</h2>
      <p className="text-3xl font-light">$ {price} </p>
      <p className="uppercase font-medium">description</p>
      <p className="text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel quasi
        quod accusantium, voluptates ab fugiat et asperiores obcaecati adipisci
        deserunt beatae at porro tempore? Rem similique voluptas neque numquam.
      </p>
      <p className="uppercase font-medium">details</p>
      <p className="text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam vel quasi
      </p>
      {modal ? (
        <Modal price={price} handleModal = {handleModal} />
      ) : (
        ""
      )}
      <button
        onClick={() => handleModal(true)}
        className="p-2 rounded-3xl font-semibold uppercase text-xl border-slate-300 border-2 hover:text-yellow-400 hover:border-yellow-400 transition-colors duration-300"
      >
        buy product
      </button>
    </div>
  );
};
