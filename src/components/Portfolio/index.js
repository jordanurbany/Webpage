import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { portfolioData } from "../data/portfolio";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    //const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    // useEffect(() => {
    //     getPortfolio();
    // }, []);

    // const getPortfolio = async () => {
    //     const querySnapshot = await getDocs(collection(db, 'portfolio'));
    //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
    // }

    const renderPortfolio = (portfolio, idx) => {
        return (
            <div className="images-container" key={idx}>
               {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="portfolio-image"
                                alt="portfolio"></img>
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <p className="stack">{port.stack}</p>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View Project</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.src)}
                                    >View Repo</button>
                                </div>
                            </div>
                        )
                    })
              }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData)}</div>
            </div>
            <Loader type="triangle-skew-spin" />
        </>
    );
}

export default Portfolio;