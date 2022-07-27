import React from "react";
import { useState, useEffect } from "react";
import "../../assets/Style/home.css";
import Card from "../../components/card";
import Item from "../../components/item";
function Home() {
  const [productData, setProductData] = useState([]);
  const [item, setItem] = useState([]);
  const [showList, setShowList] = useState(true);
  const api = "https://fakestoreapi.com/products/";
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    fetchData(api);
  }, []);
  const fetchProduct = async (productId) => {
    try {
      const res = await fetch(api + productId);
      const data = await res.json();
      setItem(data);
      setShowList(false);
    } catch (error) {
      return null;
    }
  };
  let product = (() => {
    return (
      <Item
        image={item.image}
        title={item.title}
        price={item.price}
        setShowList={setShowList}
      />
    );
  })();
  let productList = productData.map((product) => {
    return (
      <Card
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        fetchProduct={fetchProduct}
      />
    );
  });
  return (
    <>
      {/* <div className="list">{showList == true ? productList : product}</div> */}
    </>
  );
}

export default Home;
