import React from "react";
import { useState, useEffect } from "react";
import "../../assets/Style/home.css";
import Card from "../../components/card";
import Item from "../../components/item";
function Home() {
  const [productData, setProductData] = useState([]);
  const [item, setItem] = useState([]);
  const [showList, setShowList] = useState(true);
  const api = "https://api.escuelajs.co/api/v1/products?offset=0&limit=200";
  const singleapi = "https://api.escuelajs.co/api/v1/products/";
  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setProductData(data);
    } catch (error) {
      return null;
    }
  };
  // useEffect(() => {
  //   fetchData(api);
  // }, []);
  const fetchProduct = async (productId) => {
    try {
      const res = await fetch(singleapi + productId);
      const data = await res.json();
      setItem(data);
      console.log(item);
      // setShowList(false);
    } catch (error) {
      return null;
    }
  };
  // let product = Object.keys(item).map((details)=>{
  //   return (
  //     <Item
  //       image={details.images[0]}
  //       title={details.title}
  //       price={details.price}
  //       setShowList={setShowList}
  //     />
  //   );
  // })
  let productList = productData.map((product) => {
    return (
      <Card
        key={product.id}
        id={product.id}
        image={product.images[0]}
        title={product.title}
        price={product.price}
        fetchProduct={fetchProduct}
      />
    );
  });
  return (
    <>
      {/* <div className="list">{productList}</div> */}
    </>
  );
}

export default Home;
