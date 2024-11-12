import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import cross_icon from '../../assets/x-regular.png';

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [error, setError] = useState(null);

    const fetchInfo = async () => {
        console.log("fetchInfo is called"); // Add this log
        try {
            const response = await fetch("http://localhost:9000/allproducts");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log("Fetched Products Data:", data); // Log the fetched data
            setAllProducts(data);
        } catch (err) {
            setError(err.message);
            console.error("Error fetching products:", err);
        }
    };
    const remove_product = async (id) => {
        try {
            const response = await fetch("http://localhost:9000/removeproduct", {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id })
            });
            const result = await response.json();
            console.log("Remove Product Response:", result);
            
            await fetchInfo(); // Re-fetch products after removal
        } catch (error) {
            console.error("Error removing product:", error);
        }
    };
    
    
    useEffect(() => {
        console.log("useEffect triggered"); // Log to confirm useEffect runs
        fetchInfo();
    }, []);
    

    console.log("Rendering Products:", allProducts); // Log the products here

    return (
        <div className='list-product'>
            <h2>All Products List</h2>
            {error ? <p>Error: {error}</p> : null}
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {allProducts.map((product) => (
                    <React.Fragment key={product.id}>
                        <div className='listproduct-format-main listproduct-format'>
                            <img src={product.image} alt="" className='list-product-image' />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img
                                className='listproduct-remove-icon'
                                src={cross_icon}
                                alt=""
                                onClick={() => remove_product(product.id)}
                            />
                        </div>
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};
export default ListProduct;
