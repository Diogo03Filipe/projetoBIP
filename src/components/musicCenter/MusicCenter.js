import React, { useEffect, useRef } from 'react';
import img from '../../assets/musicCenter.png';
import './MusicCenter.css';

const MusicCenter = () => {
  const mapRef = useRef(null);

    useEffect(() => {
        // Check if HERE Maps SDK is loaded
        const checkSDKLoaded = () => {
            if (!window.H || !window.H.service) {
                console.error('❌ HERE Maps SDK not loaded. Check script imports in index.html.');
                return false;
            }
            return true;
        };

        if (!checkSDKLoaded()) return; // Exit if SDK is not loaded
        console.log('✅ HERE Maps SDK loaded successfully');

    try {
      const platform = new window.H.service.Platform({
        apikey: 'rJh1Srtc2cV8Eof2_8VvwWaYWg16d_toLCg6HHtqChI', // Replace with your actual API key
      });

      const defaultLayers = platform.createDefaultLayers();

        if (!mapRef.current) {
            console.error('❌ Map container not found.');
            return;
        }

        console.log('✅ Map container found:', mapRef.current);


        console.log('✅ Map container found:', mapRef.current);


        console.log('✅ Map container found:', mapRef.current);


        console.log('✅ Map container found:', mapRef.current);



      console.log('✅ Map container found:', mapRef.current);

      // Initialize the map
      const map = new window.H.Map(
        mapRef.current,
        defaultLayers.vector.normal.map,
        {
          zoom: 10,
          center: { lat: 49.849997, lng: 20.816663 },
        }
      );

      console.log('✅ Map initialized:', map);

      // Remove default UI controls
      const ui = window.H.ui.UI.createDefault(map, defaultLayers);
      ui.getControl('zoom').setVisibility(false); // Hide zoom control
      ui.getControl('mapsettings').setVisibility(false); // Hide map type control

      new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(map));

      const marker = new window.H.map.Marker({ lat: 49.8548526, lng: 20.8304498 });
      map.addObject(marker);

      return () => map.dispose();
    } catch (error) {
      console.error('❌ Error initializing HERE Maps:', error);
    }
  }, []);

  return (
    <>
      <div className='title'>
        <b>Europejskie Centrum Muzyki Krzysztofa Pendereckiego</b>
      </div>

      <div>
        <img src={img} alt="City Center" className="img" />
        <p className="text container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit... <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit...
        </p>
        <div ref={mapRef} className="map" aria-label="Map showing the City Center" />
      </div>
    </>
  );
};

export default MusicCenter;
