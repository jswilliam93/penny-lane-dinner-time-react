import axios from "axios";

export const getIngredients = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/recipes/ingredients`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const searchRecipes = async (query) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/recipes`,
      {
        recipe: {
          ingredients: query,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
