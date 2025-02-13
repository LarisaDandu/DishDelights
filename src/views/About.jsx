import castle from "../assets/castle.png";
export default function About () {

    return (
        <section style = {{padding: "0px"}}>
            <p style = {{padding: "3% 20% 0% 20%", textAlign: "center"}}>DishDelights is a vibrant community dedicated to uniting food lovers from around the globe. With a vast collection of recipes, DishDelights offers a diverse range of dishes to suit every taste and dietary preference. We aspire to create a website that features detailed recipe descriptions, making it easy for anyone to discover and create delicios meals.</p>
            <img src = {castle} alt = "castle" style = {{position: "relative", zIndex: "-1000", width: "100vw", padding: "0px", marginTop: "-15%", overflow: "hidden"}}/>
        </section>
    );
}