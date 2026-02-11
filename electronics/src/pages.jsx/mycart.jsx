

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decquantity, incquantity, removefromcart } from "../slice/cartslice";
import { searchContext } from "../searchprovider";


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartitem);
  const{search}=useContext(searchContext)
  const dispatch = useDispatch()
  if (cartItems.length === 0) {
    return (<>
    <div className="flex flex-col gap-10 justify-center text-center items-center min-h-screen">
      <p className="text-xl text-gray-500">Your cart is empty! Start shopping and grab something amazing today!</p>
       <Link to="/products">  <button className="border rounded-xl bg-black text-white p-3">Shop Now</button></Link>
       </div>

 </>)}

// const filter = cartItems.filter((item)=>
// {
//   `${item.title}`.toLowerCase().includes(search.toLowerCase())
// })
  return (
    <>
    <div className="lg: space-y-4 min-h-screen pt-20 ">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center p-4 border mx-20 rounded-lg shadow-sm"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover rounded"
          />

          <div className="ml-4 flex-1">
            <h2 className="text-lg font-semibold">{item.title}</h2>

            <div className="flex items-center mt-1">
              <button
                onClick={() => dispatch(decquantity(item.id))}
                className="px-4 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
              >
                -
              </button>

              <span className="px-4 py-1 border-t border-b">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(incquantity(item.id))}
                className="px-4 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <p className="font-bold mt-2">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
          
          <button
            onClick={() => dispatch(removefromcart(item.id))}
            className="text-red-500 font-semibold hover:underline ml-4"
          >
            Remove
          </button>

        </div>

        
      ))}
       <div className="flex justify-center">
           <Link to="/products">  <button className="border rounded-xl mt-10 bg-black text-lg text-white py-3 px-6">View More Products</button></Link>
        </div>
    </div>
       
  </>);
};

export default Cart;
