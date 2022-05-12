/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Card() {
    return (
        <div className="cardContainer">
            <div className="card-img">
                <img src="https://source.unsplash.com/WLxQvbMyfas"></img>
            </div>
            <div className="card-info">
                <div class="card--country">
                    <img
                        className="location-pin"
                        src="./location-pin.svg"
                    ></img>
                    <p>JAPAN</p>
                    <a class="card--maps">View on Google Maps</a>
                </div>
                <h2 className="card--title">Mount Fuji</h2>
                <div className="card--date">12 Jan, 2021 - 24 Jan, 2021</div>
                <p className="card--desctiption">
                    Mount Fuji is the tallest mountain in Japan, standing at
                    3,776 meters (12,380 feet). Mount Fuji is the single most
                    popular tourist site in Japan, for both Japanese and foreign
                    tourists.
                </p>
            </div>
        </div>
    );
}
