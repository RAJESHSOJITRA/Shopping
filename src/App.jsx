
import React from "react";
import ProductLists from "./ProductLists";
import ProductDetail from "./ProductDetail"; // Import the new component
import SearchFilter from "./SearchFilter";
import ProductItem from "./ProductItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductLists />} />
        <Route path="/searchfilter" element={<SearchFilter />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Add this route */}
      </Routes>
    

    </Router>
    
  );
}

export default App;





// import React, { useState } from "react";

// const SearchFilter = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [minPrice, setMinPrice] = useState("");
//   const [maxPrice, setMaxPrice] = useState("");
//   const [category, setCategory] = useState("");

//   const handleSearch = () => {
//     // Implement the search functionality here
//   };

//   return (
//     <>  
//     <h1>PRODUCT LIST</h1>

    
//      <div className="Filter-Details" >
//       <label>Search:</label>
//       <input
//         type="text"
//         value={searchInput}
//         onChange={(e) => setSearchInput(e.target.value)}
//       />
//       <label>Price Range:</label>
//       <input
//         type="number"
//         placeholder="Min Price"
//         value={minPrice}
//         onChange={(e) => setMinPrice(e.target.value)}
//       />
//       -
//       <input
//         type="number"
//         placeholder="Max Price"
//         value={maxPrice}
//         onChange={(e) => setMaxPrice(e.target.value)}
//       />
//       <label>Category:</label>
//       <select value={category} onChange={(e) => setCategory(e.target.value)}>
//         <option value="">All Categories</option>
//         <option value="smartphones">Smartphones</option>
//         <option value="laptops">Laptops</option>
//         <option value="mens-watches">Men's Watches</option>
//       </select>
//       <button onClick={handleSearch}>Search</button>
//     </div>
//     </>
 
//   );
// };

// export default SearchFilter;








// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//   import React, { useEffect, useState } from "react";

  
//   function App() {
//     const [data, setData] = useState([]);
  
//     useEffect(() => {
//       fetch("https://dummyjson.com/products?limit=100")
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setData(data.products || []);
//         })
//         .catch((err) => console.log(err));
//     }, []);
  
//     const handleViewMore = (index) => {
//       const updatedData = [...data];
//       updatedData[index].expanded = !updatedData[index].expanded;
//       setData(updatedData);
//     };
  
//     return (
//       <>
//         <h1>Products Details</h1>
//         <div className="product-container">
//           {data.map((product, index) => (
//             <div className="product" key={index}>
//               <p>
//                 <img src={product.images[0]} alt={`Product ${index}`} />
//               </p>
//               <p>Title: {product.title}</p>
//               <p>Price: {product.price}</p>
//               <p>Category: {product.category}</p>
//               {product.expanded ? (
//                 <>
//                   <p>Description: {product.description}</p>
//                   <p>Rating: {product.rating}</p>
//                   <p>Stock: {product.stock}</p>
//                   <p>Discount Percentage: {product.discountPercentage}</p>
//                 </>
//               ) : null}
//               <button onClick={() => handleViewMore(index)}>
//                 {product.expanded ? "View Less" : "View More"}
//               </button>
//             </div>
//           ))}
//         </div>
//       </>
//     );
//   } 

// export default App


// App.jsx
