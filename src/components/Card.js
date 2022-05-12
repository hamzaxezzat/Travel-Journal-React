/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export default function Card({ item }) {
    // console.log(item.location);
    return (
        <div className="cardContainer">
            <div className="card-img">
                <img src={item.imageUrl}></img>
            </div>
            <div className="card-info">
                <div className="card--country">
                    <img
                        className="location-pin"
                        src="./location-pin.svg"
                    ></img>
                    <p>{item.location}</p>
                    <a href={item.googleMapsUrl} className="card--maps">
                        View on Google Maps
                    </a>
                </div>
                <h2 className="card--title">{item.title}</h2>
                <div className="card--date">
                    {item.startDate} - {item.endDate}
                </div>
                <p className="card--desctiption">{item.description}</p>
            </div>
        </div>
    );
}
