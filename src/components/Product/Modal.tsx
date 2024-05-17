import React, { useState } from "react";

type Tmodal = {
  price: number;
  handleModal: (bool: boolean) => void;
};

export const Modal = ({ price, handleModal }: Tmodal) => {
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
  const [info, setInfo] = useState({
    name: "",
    cellphone: "",
    email: "",
  });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("pulsado el formulario");

    console.log("datos del formulario son : " + info);

    console.log("datos del formulario son : " + JSON.stringify(info) );

    console.log("y el precio fijado es : " + prices );


    console.log("la cantidad fijada es  : " + amount);
  };
  return (
    <section className="absolute rounded-2xl bg-slate-100 text-slate-600 p-5 min-w-[80%]   ">
      <form onSubmit={handleForm}>
        <div className="flex flex-col ">
          <div className="flex justify-between gap-5">
            <p className="text-3xl font-semibold">Orden</p>
            <button
              type="button"
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
                name="name"
                onChange={handleInput}
                value={info.name}
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
                name="cellphone"
                onChange={handleInput}
                value={info.cellphone}
              />
              <input
                className="bg-slate-100 p-2 outline-none border-b-slate-300 border-b-2 "
                placeholder="Correo electronico"
                type="email"
                name="email"
                onChange={handleInput}
                value={info.email}
              />
            </div>
          </div>
          <div className="flex justify-between  uppercase text-sm font-medium py-2">
            <div className="">
              <p>amount</p>
              <div className="flex justify-between items-center bg-slate-700 text-slate-100 py-1 px-2 outline-none border-b-slate-300 border-b-2 w-20 rounded-2xl  ">
                <button
                  type="button"
                  className="hover:text-green-600 text-xl "
                  onClick={() => {
                    handleAmount("less");
                  }}
                >
                  -
                </button>
                <p className="text-base"> {amount} </p>
                <button
                  type="button"
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
              <p className="text-green-600 font-bold text-base "> {prices} </p>
            </div>
          </div>
          <button
            type="submit"
            className="bg-stone-900 text-slate-100 p-2 font-bold rounded-2xl "
          >
            BUY
          </button>
        </div>
      </form>
    </section>
  );
};
