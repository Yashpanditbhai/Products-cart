import React, { useState, useEffect } from "react";
import axios from "axios";
import Productscard from "../components/Productscard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []); 

  return (
    <div className="">
      <h1 className="text-3xl text-center font-bold">These are Products</h1>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center text-black">
          <div className="bg-white p-4 shadow-2xl">Loading...</div>
        </div>
      ) : (
        <Productscard products={products} />
      )}
    </div>
  );
};

export default Products;
