import { useParams } from "react-router-dom";
import pottage from "../assets/pottage.jpg";
import manchet from "../assets/manchet.jpg";
import honeyed from "../assets/honeyed.jpg";

export default function Details() {

    const recipedetail = [
        {recipeid: "1", image: pottage, name: "Pottage (Medieval Stew)", description: "A simple, hearty dish eaten by peasants and nobles alike.", servings: "Servings: 4", time: "Prep time: 1h", ingredients: "1 onion, chopped, 2 carrots, sliced, 1 parsnip, sliced, 1 cup barley (or oats), 4 cups vegetable or meat broth, 1/2 tsp salt, 1/2 tsp black pepper, 1/2 tsp thyme (optional)", instructions: "In a pot, sauté the onion until soft. Add carrots, parsnips, and barley. Stir well. Pour in the broth and bring to a boil. Reduce heat and simmer for 30-40 minutes, stirring occasionally, until thick. Season with salt, pepper, and thyme. Serve warm."},
        {recipeid: "2", image: manchet, name: "Manchet Bread (Simple Medieval White Bread)", description: "A soft, white bread eaten by the wealthy.", servings: "Servings: 4", time: "Prep time: 3h", ingredients: "3 cups flour, 1/2 tsp salt, 1 packet (2 1/4 tsp) yeast, 1 cup warm water, 1 tbsp butter", instructions: "Mix yeast with warm water and let sit for 5-10 minutes. In a bowl, combine flour and salt. Add yeast mixture and knead into a dough for about 10 minutes. Let the dough rise in a warm place for 1-2 hours. Shape into a round loaf and bake at 375°F (190°C) for 30-35 minutes."},
        {recipeid: "3", image: honeyed, name: "Honeyed Apples (Simple Dessert)", description: "A sweet treat enjoyed by both rich and poor.", servings: "Servings: 2", time: "Prep time: 10min", ingredients: "2 sliced apples, 2 tbsp honey, 1/2 tsp cinnamon, 1/4 tsp nutmeg, 1 tbsp butter", instructions: "Heat butter in a pan over medium heat. Add apple slices and cook until soft. Drizzle honey over the apples and sprinkle with cinnamon and nutmeg. Cook for another 2-3 minutes, then serve warm."},
    ];

    const {detailId} = useParams();
    const recipe = recipedetail.find((recipe) => recipe.recipeid === detailId);
    return (
        <section className = "details">
            <div className = "name-and-such">
                <img src = {recipe.image} style = {{width: "20%", boxShadow: "0px 10px 5px rgb(22, 18, 18", borderRadius: "10%"}}/>
                <div className = "just-name">
                    <h1>{recipe.name}</h1>
                    <h2>{recipe.description}</h2>
                    <div className = "specs">
                        <p>{recipe.servings}</p>
                        <p>{recipe.time}</p>
                    </div>
                </div>
            </div>
            <div className = "the-recipe">
                <p>You will need:</p> 
                <ul>
                {recipe.ingredients.split(", ").map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
                </ul>
                <p>Instructions:</p>
                <ul>
                {recipe.instructions.split(". ").map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
                </ul>
            </div>
            <p>Enjoy!😊</p>
        </section>
    )
}