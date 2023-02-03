// import React, {Component} from 'react';
import React, { useEffect, useState } from 'react';
import './App.css';
// import Login from './frontend/components/Login';
// import Register from './frontend/components/Register';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './frontend/components/Navigation';
import Router from './frontend/router';
import PlacesCard from './frontend/components/Places';
// import PlacesCard from './frontend/components/Places';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from './frontend/components/Map'
import { appBarClasses } from '@mui/material';
import PlacesList from './componenets/favorites';


// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       arrayOfPlaces: []
//     }
//   };

//   componentDidMount(){
//     // insert url here~!
//     fetch("http://18.119.123.101:3001/")
//     .then(res => res.json())
//     .then(data => {
//       console.log("data", data)
//       console.log("data res",data.results[0])
//       this.setState({
//         arrayOfPlaces: data.results
//       })
//     })
//   }

// render() {
//   return (
//     <div className="App">
//     <ol>
//     {this.state.arrayOfPlaces.map((places, index) => {
//       console.log("place", places)

//       return (
//         <PlacesCard 
//         key={index}
//         place={places.name}
//         city={places.location.city}

//         ></PlacesCard>
//       )
//     })}
//     </ol>
//     </div>
//   )
// }
// }
// export default App;
  
  
  
  function App(){
   
    const [places, setPlaces] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [inputValue, setInputValue] = useState("");
    // useState(() => []);




  useEffect(() => {
      fetch('http://18.119.123.101:3001/api/search?search=')
      // .then((res) = res.json())
      .then((place) => {
        const newSearches = place.name;
        setSearchResults(newSearches);
        return newSearches;
      })
      .then((newSearches) => {
        setSearchResults(newSearches);
      })
    }, []);
    // console.log(places)

    
    return (
      <div className="App">
        <Navigation />
        <h1 style={{
          color: 'white',
          backgroundColor: 'black'
        }}>Melinated Enterprise: All M.E</h1>
        {/* <Provider store={store}> */}
          {/* <Main> */}
            {/* <BrowserRouter> */}
              <Router>
                {/* <Switch>
          </Switch>  */}
              </Router>
              <PlacesList />
              <Map />
            {/* </BrowserRouter> */}
          {/* </Main> */}
        {/* </Provider> */}
  
  
      </div>
    );
    
  }
  export default App;
