import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import VideosContext from './context/VideosContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routing/Routes";

const list = [
    { 
        "description" : "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.\n\nLicensed under the Creative Commons Attribution license\nhttp://www.bigbuckbunny.org",
        "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" ],
        "title" : "Big Buck Bunny"
    },
    { 
        "description" : "The first Blender Open Movie from 2006",
        "sources" : [ "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" ],
        "title" : "Elephant Dream"
    }
];

function App() {
    return (
        <Router>
            <div className="App">
                <Container maxWidth="md">
                    <VideosContext.Provider value={{list: list}}>
                        <Routes/>
                    </VideosContext.Provider>
                </Container>
            </div>
        </Router>
    );
}

export default App;
