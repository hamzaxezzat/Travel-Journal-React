import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./style.css";
export default function App() {
    return (
        <div className="mainContainer">
            <Navbar />
            <Card />
            <Card />
        </div>
    );
}
