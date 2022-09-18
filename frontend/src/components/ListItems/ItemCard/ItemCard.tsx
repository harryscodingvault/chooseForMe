import React from "react";
import { Wrapper } from "./ItemCard.style";

interface ItemCardInterface {
  item: string;
  deleteHandler: (params: any) => any;
  index: number;
}

const ItemCard = ({ item, deleteHandler, index }: ItemCardInterface) => {
  return (
    <Wrapper>
      <h5>{item}</h5>
      <div className="delete-btn" onClick={() => deleteHandler(index)}>
        <h5>X</h5>
      </div>
    </Wrapper>
  );
};

export default ItemCard;
