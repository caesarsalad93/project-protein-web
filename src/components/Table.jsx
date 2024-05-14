import json from '../../frozenMeatPoultrySeafood_processed.json'
import React, { useState } from 'react';

export default function ProductsTable({ initialData }) {

    const [data, setData] = useState(initialData);
    const [filter, setFilter] = useState('');
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        if(event.target.value === "") {
            setData(initialData);
            console.log(initialData);
        } else {
            const filteredData = initialData.filter(item => 
                item.productTitle.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setData(filteredData);
        }
    }
    
    return (
        <div>
            <label>
                <input
                    type="text"
                    value={filter}
                    onChange={handleFilterChange}
                    placeholder="Filter"
                />
            </label>
            <table className="table-wrapper">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Calories</th>
                    <th>Fat</th>
                    <th>Carbs</th>
                    <th>Protein</th>
                    <th>Price Per Serving</th>
                    <th>Price Per Gram of Protein</th>
                    <th>Percent Calories from Protein</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <div>
                     <tr key={index}>
                        {console.log(item)}
                        <td>{item.productTitle}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.nutrition.calories}</td>
                        <td>{item.nutrition.totalFat}</td>
                        <td>{item.nutrition.totalCarbs}</td>
                        <td>{item.nutrition.protein}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.productPrice}</td>
                        <td>{item.productPrice}</td>                        
                    </tr>
                    </div>
                ))}
            </tbody>
        </table>
        </div>
    )
}

// nutrition
// : 
// calories
// : 
// "110"
// protein
// : 
// "9"
// servingSize
// : 
// "N/A"
// servingsPerContainer
// : 
// "N/A"
// totalCarbs
// : 
// "2"
// totalFat
// : 
// "7"
