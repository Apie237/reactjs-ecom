import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/cloud-upload.png';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]: e.target.value});
  };

  const Add_Product = async () => {
    

    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    try {
      const uploadResponse = await fetch("http://localhost:9000/upload", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData
      });
      responseData = await uploadResponse.json();

      if (responseData.success) {
        product.image = responseData.image_url;
        console.log(product);
        const addProductResponse = await fetch("http://localhost:9000/addproduct", {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          body: JSON.stringify(product),
        });
        const addProductData = await addProductResponse.json();
        addProductData.success ? alert("Product Added") : alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product.");
    }
  };

  return (
    <div className='add-product'>
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here'/>
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here'/>
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
      </div>    
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image ? URL.createObjectURL(image) : upload_area} alt="" className='addproduct-thumbnail-img' />
        </label>
        <input type="file" onChange={imageHandler} name='image' id='file-input' hidden/>
      </div>
      <button className="addproduct-button" onClick={Add_Product}>ADD</button>
    </div>   
  );
};

export default AddProduct;