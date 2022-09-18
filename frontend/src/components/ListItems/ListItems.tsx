import React from "react";
import ItemCard from "./ItemCard/ItemCard";
import { Wrapper } from "./ListItems.style";

interface ListInterface {
  list: string[];
  deleteHandler: (params: any) => any;
}

const ListItems = ({ list, deleteHandler }: ListInterface) => {
  return (
    <Wrapper>
      {list.map((item, index) => (
        <ItemCard
          item={item}
          key={index}
          index={index}
          deleteHandler={deleteHandler}
        />
      ))}
    </Wrapper>
  );
};

export default ListItems;
