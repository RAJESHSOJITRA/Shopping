import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slider, setSlider] = useState(null);

  useEffect(() => {
    // Fetch product details based on the ID
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

  if (!productData) {
    return <p>Loading...</p>;
  }

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Slider-Details">
      <div className="Slider">
      <Slider
        ref={(slider) => setSlider(slider)} // Set the ref to the slider component
        {...settings}
        style={{ width: "600px", height: "600px" }}
      >
        {productData.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} className="image" />
          </div>
        ))}
      </Slider>
      </div>
      <div className="details">
        <h1>{productData.id}</h1>
        <h1>Product Details</h1>
        <p>Title: {productData.title}</p>
        <p>Price: {productData.price}</p>
        <p>Category: {productData.category}</p>
        <p>Description: {productData.description}</p>
        <p>Rating: {productData.rating}</p>
        <p>Stock: {productData.stock}</p>
        <p>Discount Percentage: {productData.discountPercentage}</p>
      </div>
      {/* <button onClick={prevSlide}>Prev</button>
      <button onClick={nextSlide}>Next</button> */}
    </div>
  );
};

export default ProductDetails;

// Automatic slider will change
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState(null);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     // Fetch product details based on the ID
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProductData(data);
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
//   };

//   return (
//     <div className="Slider-Details"> 
//       <div className="slider">
//       <Slider {...settings} style={{ width: "500px", height: "500px" }}>
//         {productData.images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Slide ${index}`} className="image" />
//           </div>
//         ))}
//       </Slider>
//       </div>

      
//       <div className="Details">
//         <h1>{productData.id}</h1>
//         <h1>Product Details</h1>
//         <p>Title: {productData.title}</p>
//         <p>Price: {productData.price}</p>
//         <p>Category: {productData.category}</p>
//         <p>Description: {productData.description}</p>
//         <p>Rating: {productData.rating}</p>
//         <p>Stock: {productData.stock}</p>
//         <p>Discount Percentage: {productData.discountPercentage}</p>
//       </div>
      
//     </div>
//   );
// };

// export default ProductDetails;


// Range
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     // Fetch product details based on the ID
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProductData(data);
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="Details">
//       <div className="slider">
//         <Slider images={productData.images} />
//       </div>
//       <div>
//         <h1>{productData.id}</h1>
//         <h1>Product Details</h1>
//         <p>Title: {productData.title}</p>
//         <p>Price: {productData.price}</p>
//         <p>Category: {productData.category}</p>
//         <p>Description: {productData.description}</p>
//         <p>Rating: {productData.rating}</p>
//         <p>Stock: {productData.stock}</p>
//         <p>Discount Percentage: {productData.discountPercentage}</p>
//       </div>
//     </div>
//   );
// };

// const Slider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleChange = (event) => {
//     setCurrentIndex(Number(event.target.value));
//   };

//   return (
//     <div className="slider-container">
//       <input
//         type="range"
//         min={0}
//         max={images.length - 1}
//         value={currentIndex}
//         onChange={handleChange}
//       />
//       <div className="image-container">
//         <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="image" />
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;import React, { useEffect, useState } from "react";
  
  
  
    //   only for imges shown 






// Slider Code for images 

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [productData, setProductData] = useState(null);

//   useEffect(() => {
//     // Fetch product details based on the ID
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProductData(data);
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   if (!productData) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="Details">
//       {productData.images.length > 1 ? (
//         <Slider
//           dots={true}
//           infinite={true}
//           speed={500}
//           slidesToShow={1}
//           slidesToScroll={1}
//         >
//           {productData.images.map((image, index) => (
//             <div key={index}>
//               <img
//                 style={{ width: "200px", height: "200px" }}
//                 src={image}
//                 alt={`Product ${productData.id}`}
//               />
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div>
//           <img
//             style={{ width: "200px", height: "200px" }}
//             src={productData.images[0]}
//             alt={`Product ${productData.id}`}
//           />
//         </div>
//       )}

//       <div>
//         <h1>{productData.id}</h1>
//         <h1>Product Details</h1>
//         <p>Title: {productData.title}</p>
//         <p>Price: {productData.price}</p>
//         <p>Category: {productData.category}</p>
//         <p>Description: {productData.description}</p>
//         <p>Rating: {productData.rating}</p>
//         <p>Stock: {productData.stock}</p>
//         <p>Discount Percentage: {productData.discountPercentage}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [Productdata, setResponseData] = useState("");

//   useEffect(() => {
//     // Fetch product details based on the ID
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setResponseData(data);
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   //   if (!Productdata) {
//   //     return <p>Loading...</p>;
//   //   }

//   return (
//     <>   
//     <div className="Details">
   
//  <div>
//             <img 
//             style={{width:"200px",height:"200px"}}
            
//             // src={Productdata.images[0]}
//             src={Productdata.images[0]}
//             alt={`Product ${Productdata.id}`} />
//         </div> 
        
  
//      <div>
//       <h1>{Productdata.id}</h1>
//       <h1>Product Details</h1>
//       <p>Title: {Productdata.title}</p>
//       <p>Price: {Productdata.price}</p>
//       <p>Category: {Productdata.category}</p>
//       <p>Description: {Productdata.description}</p>
//       <p>Rating: {Productdata.rating}</p>
//       <p>Stock: {Productdata.stock}</p>
//       <p>Discount Percentage: {Productdata.discountPercentage}</p>

//     </div>
//     </div>
//     </>

//   );
// };

// export default ProductDetails;

 
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [productData, setResponseData] = useState("");

//   useEffect(() => {
//     // Fetch product details based on the ID
//     fetch(`https://dummyjson.com/products/${id}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setResponseData(data);
//         console.log(data);
//       })
//       .catch((err) => console.error(err));
//   }, [id]);

//   // if (!productData) {
//   //   return <p>Loading...</p>;
//   // }

//   return (
//     <>   
//     <div className="Details">
//       <div>
//         <img 
//           style={{width:"300px", height:"300px"}}
//           src={productData.images[0]} // Assuming images is an array containing URLs
//           alt={`Product ${productData.id}`} />
//       </div>
  
//       <div>
//         <h1>{productData.id}</h1>
//         <h1>Product Details</h1>
//         <p>Title: {productData.title}</p>
//         <p>Price: {productData.price}</p>
//         <p>Category: {productData.category}</p>
//         <p>Description: {productData.description}</p>
//         <p>Rating: {productData.rating}</p>
//         <p>Stock: {productData.stock}</p>
//         <p>Discount Percentage: {productData.discountPercentage}</p>
//       </div>
//     </div>
//     </>

//   );
// };

// export default ProductDetails;


