import { createContext, useContext, useState } from 'react';
import data from '../data/planets.json';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentPlanet, setCurrentPlanet] = useState(data[0]);

  const changePlanet = planet => {
    if (currentPlanet === planet) return;
    setCurrentPlanet(planet);
  };

  return (
    <AppContext.Provider value={{ currentPlanet, changePlanet }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
