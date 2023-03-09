import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-content">
                <div className="card-map">
                    <img src="/public/images/gps.png" height="16px" />
                    <p>{props.title}</p>
                    <a href={props.map}>View on Google Maps</a>
                </div>
                <h1 className="card-place">{props.place}</h1>
                <p className="card-date"><b>{props.date}</b></p>
                <p className="card-desc">{props.description}</p>
            </div>
        </div>
    )
}
