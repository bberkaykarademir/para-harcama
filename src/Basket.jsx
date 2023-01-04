import React from "react";

const Basket = ({ buy }) => {
  return (
    <div className="basket">
      <p>
        {buy.amount} tane {buy.title}
      </p>
      
    </div>
    
  );
};

export default Basket;
