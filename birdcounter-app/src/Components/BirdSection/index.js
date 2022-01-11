import React, { useState } from "react";


import { BirdButton } from "../Button";

export function BirdSection({image, bird, addTotalBirds, deductTotalBirds}){
    
  const [count, setCount] = useState(0);
  const altText = `Nice photo of a ${bird}`;

  function plus() {
    setCount(count + 1);
  }

  function minus() {
    return count === 0 ? null : setCount(count - 1);
  }
    
    return(
        <article>
            <BirdButton text="➖" onClick={() => {minus(); if(count>0)deductTotalBirds()}} />
            <img src={image} alt={altText}></img>
            <h2> {count < 0 ? 0: count} {count === 1 ? bird : bird + "s"} </h2>
            <BirdButton text="➕" onClick={(e) => {plus(); addTotalBirds()}} />
        </article>
        
    ) 
}