import React from "react";

// const ListRecent = ({searchResults}) => {
//     console.log(searchResults);
//     const results = searchResults.map((business)) => {
//         return <Listing key={business.place_id} business = {business.name} />
//     }

//     const content = results.length ?
// }



// import React, { useState, useEffect } from 'react';

// const CardList = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://api.example.com/cards%27);
//       const data = await response.json();
//       setCards(data);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {cards.map(card => (
//         <div key={card.id}>
//           <h2>{card.title}</h2>
//           <p>{card.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;