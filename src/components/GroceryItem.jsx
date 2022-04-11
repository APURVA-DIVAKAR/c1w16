// reusable card component
import  GroceryDetails from "./Grocerydetails"
import styles from "./GroceryItem.module.css";
// import CartButton from "./CartButton";

const GroceryItem = (props) => {
 
  return <>
      <div className="cardContainer">
        <div className={styles.cardContainer}>
          <h4>{props.data.discount}off</h4>
          <img src={props.data.imgURL}/>
        </div>
        <h3>{props.data.title}</h3>
        <div className="pricess">
          <h4>₹{props.data.sellingPrice}</h4>
          <h4>M.R.P <s>{props.data.mrp}</s></h4>
        </div>
      </div>
      {/* <CartButton /> */}


  </>;
};
export default GroceryItem;
