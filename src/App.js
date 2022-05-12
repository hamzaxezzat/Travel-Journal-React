import React from "react";
import data from "./data";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import "./style.css";
export default function App() {
    const exportedData = data.map((item) => {
        return <Card key={item.key} item={item} />;
    });
    // console.log(exportedData);
    return (
        <div className="mainContainer">
            <Navbar />
            <div>{exportedData}</div>
        </div>
    );
}
