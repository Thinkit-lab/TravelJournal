import React from "react"

export default function Body(props) {
    
    return (
        <div className="card-body">
            <img className="body-image" src={props.item.imageUrl} />
            <div className="travel-details">
                <div className="card-location">
                <span> <img className="location-logo" src="https://media.istockphoto.com/id/1261917621/vector/map-pin-icon-for-your-web-site-and-mobile-app.jpg?s=612x612&w=0&k=20&c=kpqmtnYMH1A1Oyn39shNEbwyhn9gYc1tFsMY2B9Xodo=" /></span>
                <span className="country">{props.item.location}</span>
                <span className="google-link"> <a href={props.item.googleMapsUrl}>View on Google Maps </a> </span>
                </div>
                <h2 className="card-title">{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description"> {props.item.description}</p>
            </div>
        </div>
    )
}