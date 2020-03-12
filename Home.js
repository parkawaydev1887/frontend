import React, {useState} from 'react';
import fire from './config/fire';
import Toolbar from './components/Toolbar.js'
import SideDrawer from './components/SideDrawer.js'
import Backdrop from './components/Backdrop.js'
import ReactMapGL, { Marker, Popup } from "react-map-gl";

import './Home.css';
import token from './config'

 function Home(props) {
  const [viewport, setViewport] = useState({
      latitude: 30.433817,  
      longitude: -84.289698,
      width: "100vw",
      height: "100vh",
      zoom: 10
    });
    const [selectedPark, setSelectedPark] = useState(null);

  const [sideDrawerOpen, setsideDrawerOpen] = useState(false);
  const [prevState, setprevState] = useState(null);

const drawerToggleClickHandler=() =>{
    setsideDrawerOpen(prevState=>{
        setprevState(prevState)
        return !sideDrawerOpen;
    })
  }
  /**const drawerToggleClickHandler =() =>{
    this.setState((prevState) =>{
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
**/
  const backdropClickHandler =()=>{
    this.setState({sideDrawerOpen: false});
  };

  const logout =()=> {
    fire.auth().signOut();
  }

    let backdrop;
    if(sideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="Home">
      <div style={{height: '100%'}}></div>
      <Toolbar drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen}/>
      {backdrop}
      <main style={{marginTop: '64px'}}>
      <p>This is the page content!</p>
      <ReactMapGL {...viewport}mapboxApiAccessToken={token}
          mapStyle="mapbox://styles/parkaway1887/ck7ijt5rn39lq1imlks4jc8s7"
          onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
      Markers here
      </ReactMapGL>
      </main>
      </div>
    )
  }

  export default Home;
