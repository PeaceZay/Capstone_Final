// import React, {Component} from 'react';
import React, { useState } from 'react';
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

// class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       arrayOfPlaces: []
//     }
//   };

//   componentDidMount(){
//     // insert url here~!
//     fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=")
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
   
    // const [data, setData] = useState([])  return <Map />;


    
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
              <Map />
            {/* </BrowserRouter> */}
          {/* </Main> */}
        {/* </Provider> */}
  
  
      </div>
    );
    
  }
  export default App;
