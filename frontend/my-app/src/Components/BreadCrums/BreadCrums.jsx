import React from 'react'
import "./BreadCrums.css"
import arrow_icon from "../Assets/chevron-right.png"

export const BreadCrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrums'>
        HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name} <img src={arrow_icon} alt="" />
    </div>
  )
}
export default BreadCrums
