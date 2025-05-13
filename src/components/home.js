import zaklinczyn from '../assets/zaklinczyn.png';
import melsztyn from '../assets/melsztyn.png';
import euroveloMotesk from '../assets/EuroveloMostek.png';
import StIdzi from '../assets/StIdzi.png';
import musicCenter from '../assets/musicCenter.png';
import './home.css';
import React, { useState, useEffect } from 'react';


const Home = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [zaklinczyn, melsztyn, euroveloMotesk, StIdzi, musicCenter];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <img src={images[currentImage]} alt="Rotating Images" className="img" />
    );
}
export default Home;
