import React, { useEffect, useState } from "react";

export default function LoadMoreBtn() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      //   setError(e);
      console.log("The error", e);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisable(true);
    }
  }, [products]);

  if (loading) {
    return <div>Product is loading !!</div>;
  }

  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-3 ">
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className="border text-center">
                <img src={item.images} alt={item.title} />
                <div>{item.title}</div>
              </div>
            ))
          : null}

        <button
          disabled={disable}
          onClick={() => setCount(count + 1)}
          className="bg-blue-300 px-5 py-2 rounded-3xl "
        >
          Load more
        </button>

        {disable ? <p>Reached 100 product</p> : null}
      </div>
    </div>
  );
}
