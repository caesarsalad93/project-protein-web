import { useState, useEffect } from 'react'
import './App.css'
import Logos from './components/Logos'
import ProductsTable from './components/Table'
import frozenMeat from '../frozenMeatPoultrySeafood_processed.json'
import snackPacks from '../snackPacks_processed.json'

const categoriesData = {
  "Frozen Meat, Poultry, Seafood": frozenMeat,
  "Snack Packs": snackPacks,
};

const categoryKeys = Object.keys(categoriesData);

function App() {

  const [selectedCategories, setSelectedCategories] = useState(categoryKeys);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        const selectedData = selectedCategories.flatMap(category => categoriesData[category]);
        setFilteredData(selectedData);
        console.log('Filtered Data:', selectedData);
    }, [selectedCategories]);

    const handleCategoryChange = (category) => {
      setSelectedCategories(prev => {
          if (prev.includes(category)) {
              return prev.filter(cat => cat !== category);
          } else {
              return [...prev, category];
          }
      });
  };

  return (
    <>
        <Logos />
            <div className="category-selection">
                {categoryKeys.map(category => (
                    <label key={category}>
                        <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                        />
                        {category}
                    </label>
                ))}
            </div>
        <ProductsTable initialData={filteredData} />
    </>
  )
}

export default App
