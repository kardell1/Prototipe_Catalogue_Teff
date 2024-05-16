import React, { useState } from "react";
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
  const [amount, setAmount] = useState(1);
  const [prices, setPrice] = useState(price);
  const handleAmount = (event: string) => {
    if (amount === 0 && event === "less") {
      setAmount(0);
      setPrice(0);
    } else if (event === "most") {
      setAmount(amount + 1);
      setPrice(prices + price);
    } else if (event === "less") {
      setAmount(amount - 1);
      setPrice(prices - price);
    }
  };
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
        <section className="absolute rounded-2xl bg-slate-100 text-slate-600 p-5 min-w-[80%]   ">
          <div className="flex flex-col ">
            <div className="flex justify-between gap-5">
              <p className="text-3xl font-semibold">Orden</p>
              <button
                className="bg-red-500 rounded-full px-3"
                onClick={() => handleModal(false)}
              >
                X
              </button>
            </div>
            <div className="p-4  ">
              <p className="font-semibold "> Datos personales </p>
              <div className="flex flex-col  ">
                <input
                  className="bg-slate-100 p-2 outline-none border-b-slate-300 border-b-2 "
                  placeholder="Nombre"
                  type="text"
                />
              </div>
            </div>
            <div className="p-4">
              <p className="font-semibold"> Datos contacto </p>
              <div className="flex flex-col gap-5">
                <input
                  className="bg-slate-100 p-2 outline-none border-b-slate-300 border-b-2 "
                  placeholder="Celular"
                  type="text"
                />
                <input
                  className="bg-slate-100 p-2 outline-none border-b-slate-300 border-b-2 "
                  placeholder="Correo electronico"
                  type="text"
                />
              </div>
            </div>
            <div className="flex justify-between  uppercase text-sm font-medium py-2">
              <div className="">
                <p>amount</p>
                <div className="flex justify-between items-center bg-slate-700 text-slate-100 py-1 px-2 outline-none border-b-slate-300 border-b-2 w-20 rounded-2xl  ">
                  <button
                    className="hover:text-green-600 text-xl "
                    onClick={() => {
                      handleAmount("less");
                    }}
                  >
                    -
                  </button>
                  <p className="text-base"> {amount} </p>
                  <button
                    className="hover:text-green-600 text-xl"
                    onClick={() => {
                      handleAmount("most");
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p>price</p>
                <p className="text-green-600 font-bold text-base ">
                  {" "}
                  {prices}{" "}
                </p>
              </div>
            </div>
            <button className="bg-stone-900 text-slate-100 p-2 font-bold rounded-2xl ">
              BUY
            </button>
          </div>
        </section>
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
