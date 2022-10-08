import axios from 'axios';

const BASE_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch';
const SECOND_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes';

const options1 = {
  params: {
    type: 'main course',
    addRecipeInformation: 'true',
    offset: '0',
    number: '1',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};

const options2 = {
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options1);
    console.log(data);
    return data;
}


export const fetchRecipeInfo = async (id) => {
  const { recipeData } = await axios.get(`${SECOND_URL}/${id}/information`, options2);
  return recipeData;
}
