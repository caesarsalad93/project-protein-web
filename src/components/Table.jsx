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
            <div className="table-container">
            <table>
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
                     <tr key={index}>
                        {console.log(item)}
                        <td className="numeric">{item.productTitle}</td>
                        <td className="numeric">{item.productPrice}</td>
                        <td className="numeric">{item.nutrition.calories}</td>
                        <td className="numeric">{item.nutrition.totalFat}</td>
                        <td className="numeric">{item.nutrition.totalCarbs}</td>
                        <td className="numeric">{item.nutrition.protein}</td>
                        <td className="numeric">{item.productPrice}</td>
                        <td className="numeric">{item.productPrice}</td>
                        <td className="numeric">{item.productPrice}</td>                        
                    </tr>
                ))}
            </tbody>
        </table>
            </div>
        </div>
    )
}