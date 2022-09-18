import axios from "axios";
import React, { useState, useEffect } from "react";
import FormInput from "../../components/FormInput/FormInput";
import ListItems from "../../components/ListItems/ListItems";
import { Wrapper } from "./Main.style";

const initialValuesState = {
  item: "",
};

const initialErrorState = {
  itemM: "",
};

const Main = () => {
  const [values, setValues] = useState(initialValuesState);
  const [errorMessages, setErrorMessages] = useState(initialErrorState);
  const [listItems, setListItems] = useState<string[]>([]);
  const [selection, setSelection] = useState("");
  const [counter, setCounter] = useState(null);

  useEffect(() => {
    const getCurrentCount = async () => {
      const url = "http://localhost:5000/api/counter";
      let res = await axios.get(url);
      setCounter(res.data.currentCount);
    };
    getCurrentCount();
  }, []);

  const addCount = async () => {
    const url = "http://localhost:5000/api/counter";
    let res = await axios.post(url);
    setCounter(res.data.currentCount);
  };

  const handleChange = (e: React.FormEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    setValues({ ...values, [name]: value });
  };

  const checkValues = () => {
    const { item } = values;
    let newItem = item.trim();

    let verifiedData = true;
    let itemM = "";

    if (!newItem.length) {
      verifiedData = false;
      itemM = "No empty field!";
    }

    setErrorMessages({
      ...errorMessages,
      itemM,
    });
    return verifiedData;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (checkValues()) {
      setErrorMessages(initialErrorState);
      setValues(initialValuesState);
      setListItems([values.item, ...listItems]);
      console.log("register", values.item, listItems);
    }
  };

  const deleteHandler = (thisIndex: number) => {
    let newList = listItems.filter((item, index) => index !== thisIndex);
    setListItems(newList);
  };

  const selectionHandler = () => {
    let choice = Math.floor(Math.random() * listItems.length);
    if (listItems.length >= 2) {
      addCount();
      setSelection(listItems[choice]);
    }
  };

  return (
    <Wrapper>
      <div className="title-h">
        <h4>Random decision making machine</h4>
        <h4>
          <span>{counter}</span> decisions have been made
        </h4>
      </div>
      <div className="input-container">
        <form className="form" onSubmit={handleSubmit}>
          <FormInput
            name="item"
            type="text"
            required={true}
            errorMessage={errorMessages.itemM}
            value={values.item}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            <h5>Add Option</h5>
          </button>
        </form>
      </div>
      {selection && <h3 className="result">{selection}</h3>}
      <ListItems list={listItems} deleteHandler={deleteHandler} />

      <div className="btn main-btn" onClick={selectionHandler}>
        <h5>Go destiny!!</h5>
      </div>
    </Wrapper>
  );
};

export default Main;
