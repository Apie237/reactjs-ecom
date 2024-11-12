import React, { useEffect, createContext, useState } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};


export const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());
    ;


    useEffect(() => {
        fetch('http://localhost:9000/allproducts')
        .then((response) => response.json())
        .then((data) => setAll_Product(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:9000/getcart',{
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: null
            }).then((res) => res.json())
              .then((data) => setCartItems(data))
        }
    },[])
    
    const addToCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId]  + 1 };
            console.log("Updated Cart Items after Adding:", updatedCart);
            return updatedCart;
        });
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:9000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => console.log("Add to Cart Response:", data))
            .catch((error) => console.error("Failed to add to cart:", error));
        }
    };
    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const updatedCart = { ...prev, [itemId]: prev[itemId] - 1 };
            console.log("Updated Cart Items after Removing:", updatedCart);
            return updatedCart;
        });
    
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:9000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId }),
            })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => console.log("Remove from Cart Response:", data))
            .catch((error) => console.error("Failed to remove from cart:", error));
        }
    };
    
    
    

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const ContextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

