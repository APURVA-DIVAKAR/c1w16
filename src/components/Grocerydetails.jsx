import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem"
import {nanoid} from "nanoid";

const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container" style={{display:"grid", gridTemplateColumns:"repeat(5,1fr)",gap:"30px"}}>
            {/* map through the data and display the cards */}
           {
               data.map(data=>{
                   return<GroceryItem data={data} key={data.id} />
               })
           }  
        </div>
        </>
    )
}
export default GroceryDetails