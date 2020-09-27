import React from "react";
import style from "./Recepie.module.css"


export default function Recepie ({title , image , calories,ingredients}) {
    return (
        <div  className={style.recepie}>
            <h1>{title}</h1>
            <p> calories : {calories}</p>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <img className={style.image} src={image} alt ="recipe-img"/>
        </div>
    )
}