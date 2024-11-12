import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import Items from '../Items/Items';

export const NewCollections = () => {
    const [new_collections, setNew_collections] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await fetch('http://localhost:9000/newcollections');
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();
                setNew_collections(data);
            } catch (err) {
                setError(err.message);
                console.error("Error fetching new collections:", err);
            }
        };

        fetchInfo();
    }, []); // Add an empty dependency array

    return (
        <div className='new-collections'>
            <h1>New Collections</h1>
            <hr />
            {error ? <p>Error: {error}</p> : null}
            <div className="collections">
                {new_collections.map((item, i) => (
                    <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
