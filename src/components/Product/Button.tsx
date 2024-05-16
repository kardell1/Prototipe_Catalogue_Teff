import React from "react";
import type { TProdCard } from "../TProd.ts";
import { FetchDataPost } from "../../api/PostData.tsx";
export const Button = ({ id, product, price }: TProdCard) => {
  const handleButton = async () => {
    const res = await FetchDataPost({ 
        id: id, 
        product: product, 
        price: price 
    });
    console.log(JSON.stringify(res));
  };
  return (
    <div className="absolute bottom-[50%]">
      <button
        onClick={handleButton}
        className="bg-stone-900 font-medium text-slate-100 max-w-0 block group-hover:p-2 group-hover:max-w-full duration-300 transition-all overflow-hidden"
      >
        Compra
      </button>
    </div>
  );
};
