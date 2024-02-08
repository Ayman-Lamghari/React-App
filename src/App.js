import React, { useState } from 'react';
import { Checkbox } from './components/forms/Checkbox.jsx';
import { ProductCategoryRow } from './components/products/ProductCategoryRow.jsx';
import { ProductRow } from './components/products/ProductRow.jsx';
import { Input } from './components/forms/input.jsx';


const PRODUCTS = [
  { category: "Fruits", price:"$1", stocked: true, name:"Apple"},
  { category: "Fruits", price:"$1", stocked: true, name:"Dragonfruit"},
  { category: "Fruits", price:"$3", stocked: false, name:"Passionfruit"},
  { category: "vegetables", price:"$2", stocked: true, name:"Spinach"},
  { category: "vegetables", price:"$4", stocked: false, name:"Pumpkin"},
  { category: "vegetables", price:"$1", stocked: true, name:"Peas"},
];

function App() {

  const[showStockedOnly, setShowStockedOnly] = useState(false)
  const[search, setSearch] = useState('')

  const visibleProducts = PRODUCTS.filter(product => {
    if(showStockedOnly && !product.stocked) {
      return false
    }

    if(search && !product.name.includes(search)) {
      return false
    }

    return true
  })

  return (
    <div className="container my-3">
      <SearchBar 
      search={search}
      onSearchChange={setSearch}
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange={setShowStockedOnly}/>
      <ProductTable products={visibleProducts}/>
    </div>
  );
}

function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange}) {
  return (
    <div>
      <div className="mb-3">
        <input 
         value={search}
         onChange={onSearchChange}
         placeholder="Rechercher..." 
        />
        
       <input type="range" className="form-range" min={0} max={10}/>

        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="N'afficher que les produits en stock"
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category}
         name={product.category} />)
    }
    lastCategory = product.category
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
      {rows}
      </tbody>
    </table>
  );
}

export default App;

