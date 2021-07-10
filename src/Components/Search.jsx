import React, { useState, useEffect } from "react";
import { Select } from "antd";
import { getIngredients } from "../Api";

const Search = (props) => {
  const { Option } = Select;
  const [ingredients, setIngredients] = useState();
  const { setQuery } = props;

  useEffect(() => {
    async function fetchIngredients() {
      const ingredients = await getIngredients();
      setIngredients(ingredients);
    }
    fetchIngredients();
  }, []);

  function handleChange(value) {
    setQuery(value);
  }

  return (
    <Select
      mode="multiple"
      style={{ width: "100%" }}
      placeholder="What do you have in you fridge?"
      onChange={handleChange}
    >
      {ingredients &&
        ingredients.map((item) => <Option key={item}>{item}</Option>)}
    </Select>
  );
};

export default Search;
