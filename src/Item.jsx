import React from "react";

const Item = ({ basket, setBasket, product, money, total }) => {
  const basketItem = basket.find((item) => item.id === product.id);
  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      checkBasket.amount += 1;
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        checkBasket,
      ]);
    } else {
      setBasket([
        ...basket.filter((item) => item.id !== product.id),
        {
          id: product.id,
          title: product.title,
          amount: 1,
        },
      ]);
    }
  };
  const removeBasket = () => {
    const currentItem = basket.find((item) => item.id === product.id);
    currentItem.amount -= 1;
    const basketWithoutCurrent = basket.filter(
      (item) => item.id !== product.id
    );
    if (currentItem.amount === 0) {
      setBasket([...basketWithoutCurrent]);
    } else {
      setBasket([...basketWithoutCurrent, currentItem]);
    }
  };
  return (
    <div className="item">
      <img src={product.img} />
      <h2>{product.title}</h2>
      <p className="price">${product.price}</p>
      <div className="amountsec">
        <button disabled={!basketItem} onClick={removeBasket} className="sat">
          Sat
        </button>
        <p>{(basketItem && basketItem.amount) || 0}</p>
        <button
          disabled={total + product.price > money}
          onClick={addBasket}
          className="al"
        >
          Satın Al
        </button>
      </div>
    </div>
  );
};

export default Item;
