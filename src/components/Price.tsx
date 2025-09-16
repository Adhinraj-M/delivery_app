"use client";

import React, { useEffect, useState } from "react";

type Props = {
  price: number;
  id: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(()=>{
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
  },[quantity,selected,options,price])

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* options contianer */}
      <div className="flex gap-4">
        {options?.map((item, index) => (
          <button
            className="min-w-[6rem] p-2 ring-1 ring-red-400 rounded-b-md"
            style={{
              background: selected === index ? "rgb(248 113 112" : "white",
              color: selected === index ? "white" : "red",
            }}
            key={item.title}
            onClick={()=>setSelected(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
      {/* quantity and add button container */}
      <div className="flex justify-between items-center">
        {/* quantity */}
        <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
          <span className="">Quantity</span>
          <div className="flex gap-4 items-center">
            <button onClick={()=> setQuantity(prev=>(prev > 1 ? prev-1:1))} className="">{"<"}</button>
            <span>{quantity}</span>
            <button onClick={()=>setQuantity(prev=>(prev < 9 ? prev+1:prev))} className="">{">"}</button>
          </div>
        </div>
        {/* add to cart */}
        <button className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
