
// keep the add to cart component here
import {useState} from "react";
const CartButton = () =>{ 
    //manage state of the count 
    const [item,setItem] = useState(0)
    const[isItem,setisItem]=useState(false);
    const handleClick =()=>{
      setItem(item+1)
      setisItem(true);
    }
    const handleClicked =()=>{
      setItem(item-1)
    }
  return
  {/* add to cart button */}
  {/* count with - and  + button */}
  
   ! isItem ?(
   
      <button onClick={handleClick}>ADD to Cart</button>
    
   ):(
    <>
  <div>
      <button onClick={handleClicked}>-</button>
      <p className="count-item">{item}</p>
      <button onClick={handleClick}>+</button>
  </div>
 
  </>
    )
};
export default CartButton
