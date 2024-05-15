import React, { useState, useEffect } from 'react';

export default function ProductsTable({ initialData }) {

    const [data, setData] = useState(initialData);
    const [filter, setFilter] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: '', direction: '' });

    useEffect(() => {
        setData(initialData);
    }, [initialData]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
        if(event.target.value === "") {
            setData(initialData);
        } else {
            const filteredData = initialData.filter(item => 
                item.productTitle.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setData(filteredData);
        }
    }

    const handleSort = (key) => {
        let direction = 'ascending';
        console.log(key);
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
        const sortedData = [...data].sort((a, b) => {
            let aValue = a[key];
            let bValue = b[key];

            // Parse values as numbers if they are numerical strings
            if (!isNaN(aValue) && !isNaN(bValue)) {
                aValue = parseFloat(aValue);
                bValue = parseFloat(bValue);
            }

            if (aValue < bValue) {
                return direction === 'ascending' ? -1 : 1;
            }
            if (aValue > bValue) {
                return direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        setData(sortedData);
    };

    const renderSortArrow = (key) => {
        if (sortConfig.key === key) {
            if (sortConfig.direction === 'ascending') {
                return <span className="arrow asc"></span>;
            } else {
                return <span className="arrow desc"></span>;
            }
        }
        return null;
    };
    
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
                    <th onClick={() => handleSort('productTitle')}>Product {renderSortArrow('productTitle')}</th>
                    <th onClick={() => handleSort('productPrice')}>Price {renderSortArrow('productPrice')}</th>
                    <th onClick={() => handleSort('calories')}>Calories {renderSortArrow('calories')}</th>
                    <th onClick={() => handleSort('totalFat')}>Fat {renderSortArrow('totalFat')}</th>
                    <th onClick={() => handleSort('totalCarbs')}>Carbs {renderSortArrow('totalCarbs')}</th>
                    <th onClick={() => handleSort('protein')}>Protein {renderSortArrow('protein')}</th>
                    <th onClick={() => handleSort('pricePerServing')}>PPS {renderSortArrow('pricePerServing')}</th>
                    <th onClick={() => handleSort('costPerGramProtein')}>PPG {renderSortArrow('costPerGramProtein')}</th>
                    <th onClick={() => handleSort('percentCaloriesFromProtein')}>% Calories from Protein {renderSortArrow('percentCaloriesFromProtein')}</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => {
                    const { productTitle, productPrice, nutrition, percentCaloriesFromProtein, pricePerServing, costPerGramProtein: pricePerGram, productLink } = item;
                    const { calories, totalFat, totalCarbs, protein } = nutrition;
                    console.log(item);

                    // Extend the item object with deconstructed properties
                    item.calories = calories;
                    item.totalFat = totalFat;
                    item.totalCarbs = totalCarbs;
                    item.protein = protein;

                    return (
                     <tr key={index}>
                        <td className="numeric">
                            <a href={productLink} target="_blank">
                                {productTitle}
                            </a>
                        </td>
                        <td className="numeric">{productPrice}</td>
                        <td className="numeric">{calories}</td>
                        <td className="numeric">{totalFat}</td>
                        <td className="numeric">{totalCarbs}</td>
                        <td className="numeric">{protein}</td>
                        <td className="numeric">{pricePerServing}</td>
                        <td className="numeric">{pricePerGram}</td>
                        <td className="numeric">{percentCaloriesFromProtein}</td>                        
                    </tr>
                    );
                })}
            </tbody>
        </table>
            </div>
        </div>
    )
}