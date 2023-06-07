import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Test2() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const filtProds = useSelector((state) => state.product.filteredProducts);

  const fetchData = () => {
     
    setIsLoading(true);
    setError(null);
    try {
      const data = filtProds.slice(page, page * 6);
      setItems((prevItems) => [...prevItems, ...data]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    fetchData();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading]);

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
        <h1>Data here</h1>
      {filtProds.map((prod, index) => {
        return <p>{prod.codigo}</p>;
      })}
    </div>
  );
}

export default Test2;
