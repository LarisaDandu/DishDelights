import frame from "../assets/frame.png";

export default function DefaultPage () {

    return (
    <>
        <img src={frame} alt="medieval frame" className="frame"/>
        <div className = "welcome">
            <h1>Welcome to Dish Delights - Your Portal to Medieval Feasts!</h1>
            <p>Step back in time and experience the rich flavors of the medieval world with Dish Delights. From hearty pottages and rustic breads to noble banquets and spiced meads, we bring you authentic medieval recipes crafted from historical sources.</p>
            <p>Whether you're a history enthusiast, a home cook looking for something unique, or a medieval reenactor preparing a feast, you'll find inspiration in our collection of simple, flavorful, and time-honored dishes.</p>
            <p>Uncover the tastes of the past and bring the Middle Ages to life in your own kitchen! 🏰🍽️🔥</p>
        </div>
    </>
    );
}