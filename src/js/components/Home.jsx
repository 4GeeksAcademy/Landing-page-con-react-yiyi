import React from "react";

import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
    // Datos de las tarjetas
    const cards = [
        {
            title: "Card title",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            button: "Find Out More!"
        },
        {
            title: "Another card",
            text: "Explicabo magni sapiente tempore debitis beatae culpa.",
            button: "Find Out More!"
        },
        {
            title: "Third card",
            text: "Sapiente esse necessitatibus neque.",
            button: "Find Out More!"
        },
        {
            title: "Fourth card",
            text: "Tempore debitis beatae culpa natus architecto.",
            button: "Find Out More!"
        }
    ];

    return (
        <>
            <Navbar />
            <div className="container mt-4">
                <Jumbotron />
                <div className="row mt-4">
                    {cards.map((card, index) => (
                        <div className="col-md-3 mb-4" key={index}>
                            <Card
                                title={card.title}
                                text={card.text}
                                button={card.button}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;