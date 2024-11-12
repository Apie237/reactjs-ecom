import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Contexts/ShopContext'
import BreadCrums from '../Components/BreadCrums/BreadCrums'
import { useParams } from 'react-router-dom'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { DescriptionBox }  from '../Components/DescriptionBox/DescriptionBox'
import { RelatedProducts } from '../Components/RelatedProducts/RelatedProducts'

export const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number(productId))
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}
export default Product
