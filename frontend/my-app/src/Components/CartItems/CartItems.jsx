import React from 'react'
import remove_icon from '../Assets/x-regular.png'
import { useContext } from 'react'
import { ShopContext} from '../../Contexts/ShopContext'
import './CartItems.css'


export const CartItems = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)

  // Debugging console logs
  console.log("all_product: ", all_product);
  console.log("cartItems: ", cartItems);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main ">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e, i) => {
          if(cartItems[e.id]>0){
            return  <div key={ i }>
                      <div className="cartitems-format cartitems-format-main">
                         <img src={e.image} alt="" className='carticon-product-icon' />
                         <p>{e.name}</p>
                         <p>${e.new_price}</p>
                         <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                         <p>${e.new_price * cartItems[e.id]}</p>
                         <img className='cart-remove-icon' src={remove_icon} alt="" onClick={() => {removeFromCart(e.id)}} />       
                      </div>
                      <hr/>
                    </div>
          }else return null
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Total</p>
                <h4>${getTotalCartAmount()}</h4>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='Promo Code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}
export default CartItems

