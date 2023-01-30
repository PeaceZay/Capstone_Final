import React, {useState} from "react";

function PlacesCard(props) {
    const [isClicked, setIsClicked] = useState(false);


return (
    <li style={{listStyle: "none", display: "flex", marginTop:"10px"}}>
        <h3>
            {props.place_id}
        </h3>

        {isClicked ?
        
        <div>
            <h4>{props.name}</h4>
            <h4>{props.city}</h4>
            <h4>{props.opening_hours}</h4>
            <h4 style={{wordSpacing: 5}}>
                {`city: ${props.city}`},
                State: ${props.state}
            </h4>
            <button onClick={() => setIsClicked(!isClicked)}>
                Show Less 
            </button>
        </div> 
        : <div>
            <button onClick={() => setIsClicked(!isClicked)}>
                Show More
            </button>
        </div>
    }
    </li>
)


};

export default PlacesCard;
