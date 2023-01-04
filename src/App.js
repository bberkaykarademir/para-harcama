import { useEffect, useState } from "react";
import React from "react";
import data from "./data";
import Item from "./Item";
import Basket from "./Basket";

const App = () => {
  const [products, setProducts] = useState(data);
  const [money, setMoney] = useState(100000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <h1>Harcamak için ${money - total} paranız var</h1>
      <div className="itemcontainer">
        {products.map((product, index) => {
          return (
            <Item
              key={index}
              basket={basket}
              setBasket={setBasket}
              product={product}
              money={money}
              total={total}
            />
          );
        })}
      </div>
      {basket.map((buy) => {
        return <Basket buy={buy} setBasket={setBasket} />;
      })}
      {basket.length > 0 ? (
        <button
          className="temizle"
          onClick={() => {
            setBasket([]);
          }}
        >
          temizle
        </button>
      ) : null}
    </div>
  );
};

export default App;
