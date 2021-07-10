import React from "react";
import { Card, List } from "antd";
import { includes } from "lodash";
export default function RecipeCard(props) {
  const { Meta } = Card;
  const { recipe, query } = props;
  return (
    <Card
      hoverable
      style={{ marginBottom: "20px" }}
      cover={recipe.image && <img alt={recipe.name} src={recipe.image} />}
    >
      <Meta title={recipe.name} description={recipe.total_time} />
      <br />
      <List
        size="small"
        dataSource={recipe.ingredients}
        renderItem={(item) => (
          <List.Item>{includes(query, item) ? <b>{item}</b> : item}</List.Item>
        )}
      />
    </Card>
  );
}
