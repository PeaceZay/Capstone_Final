import React from "react";

const ListRecent = ({searchResults}) => {
    console.log(searchResults);
    const results = searchResults.map((business)) => {
        return <Listing key={business.place_id} business = {business.name} />
    }

    const content = results.length ?
}