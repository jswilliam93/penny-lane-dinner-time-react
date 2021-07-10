import { Col, Divider, Row } from "antd";
import { isEmpty } from "lodash";
import { useEffect, useState } from "react";
import { searchRecipes } from "../Api";
import RecipeCard from "./RecipeCard";
import Search from "./Search";

function Recipes() {
  const [query, setQuery] = useState([]);
  const [recipes, setRecipes] = useState([]);
  console.log(recipes);

  useEffect(() => {
    async function search() {
      const recipes = await searchRecipes(query);
      setRecipes(recipes);
    }
    if (!isEmpty(query)) search();
  }, [query]);

  return (
    <>
      <Search setQuery={setQuery}></Search>

      <Divider orientation="center">Here are some recipes you can make</Divider>

      <Row gutter={16}>
        {recipes.map((recipe, index) => (
          <Col span={4} key={index}>
            <RecipeCard recipe={recipe} query={query}/>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Recipes;
