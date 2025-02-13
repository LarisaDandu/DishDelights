import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import pottage from "../assets/pottage.jpg";
import manchet from "../assets/manchet.jpg";
import honeyed from "../assets/honeyed.jpg";

export default function Recipes () {

    const dishes = [
        {recipeid: "1", image: pottage, recipename: " Pottage (Medieval Stew) ", category: "Food"},
        {recipeid: "2", image: manchet, recipename: "  Manchet Bread (Simple Medieval White Bread) ", category: "Food"},
        {recipeid: "3", image: honeyed, recipename: " Honeyed Apples (Simple Dessert) ", category: "Dessert"}
    ];

    const [ searchTerm, setSearchTerm ] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredDishes = dishes.filter(dish => {
        const matchesSearch = dish.recipename.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || dish.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className = "recipes-page">
            <h1>What dost thou desire to cook this day?</h1>
            <section className = "filtering">
                <p>Seek by Name:</p>
                <input type="text" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Looketh for a Cook's Receipt" />
                <p>Sort by Kind:</p>
                <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="all">All</option>
                    <option value="Food">Food</option>
                    <option value="Dessert">Dessert</option>
                </select>
            </section>
            <section className = "dishes">
            {filteredDishes.map((dish) => (
                <div key={dish.recipeid} className = "dish-card">
                <img src = {dish.image}/>
                <Link to= {`/DishDelights/Details/${dish.recipeid}`} style = {{fontSize: "1.5em"}}>{dish.recipename}</Link>
                </div>
            ))}
            </section>
        </div>
    );
}