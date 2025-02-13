import { useState, useEffect } from "react";

export default function FavRecipes() {
    const [recipename, setRecipename] = useState(() => {
        const savedRecipename = localStorage.getItem("recipename");
        return savedRecipename ? JSON.parse(savedRecipename) : [];
    });

    const [recipenameinput, setRecipenameinput] = useState("");
    const [recipe, setRecipe] = useState(() => {
        const savedRecipe = localStorage.getItem("recipe");
        return savedRecipe ? JSON.parse(savedRecipe) : [];
    });
    const [recipeinput, setRecipeinput] = useState("");

    useEffect(() => {
        localStorage.setItem("recipename", JSON.stringify(recipename));
        localStorage.setItem("recipe", JSON.stringify(recipe));
    }, [recipename, recipe]);

    function addRecipe() {
        if (recipenameinput.trim() !== '' && recipeinput.trim() !== '') {
            setRecipename([...recipename, recipenameinput]);
            setRecipe([...recipe, recipeinput]);
            setRecipenameinput('');
            setRecipeinput('');
        }
    }

    function removeRecipe(index) {
        const newRecipe = recipe.filter((recipe, i) => i !== index);
        setRecipe(newRecipe);
        const newRecipename = recipename.filter((recipename, j) => j !== index);
        setRecipename(newRecipename);
    }

    return (
        <div className = "favs">
            <h1>Thy beloved receipts</h1>
            <h2>Here you can create your own recipe book with all your favorite medieval dishes, for only thy eyes to behold.</h2>
            <input
                type="text"
                value={recipenameinput}
                onChange={(event) => setRecipenameinput(event.target.value)}
                placeholder="Thy dish's name"
            />
            <input className = "recipe-text"
                type="text"
                value={recipeinput}
                onChange={(e) => setRecipeinput(e.target.value)}
                placeholder="Thy dish"
            />
            <button onClick={addRecipe}>Add</button>
            <ul>
                <h2>Your saved recipes</h2>
                <section className = "yourrecipes">
                {recipename.map((name, index) => (
                    <div className = "yourrecipes-card">
                        <li key={index}>{name} 
                            <p contenteditable="true">{recipe[index]}</p> 
                            <button onClick={() => removeRecipe(index)}>Remove</button>
                        </li>
                    </div>
                ))}
                </section>
            </ul>
        </div>
    );
}
