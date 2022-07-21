import { createContext, useContext, useState, useEffect } from 'react';
import data from '../data/planets.json';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentPlanet, setCurrentPlanet] = useState(null);
  // const [currentInfo, setCurrentInfo] = useState(1);

  const [currentInfo, setCurrentInfo] = useState({
    num: 1,
    content: data[0].overview.content,
    source: data[0].overview.source,
  });

  useEffect(() => {
    setCurrentPlanet(data[0]);
    setCurrentInfo({
      num: 1,
      content: data[0].overview.content,
      source: data[0].overview.source,
    });
  }, []);

  const changePlanet = planet => {
    if (currentPlanet === planet) return;
    setCurrentPlanet(planet);
    setCurrentInfo({
      num: 1,
      content: planet.overview.content,
      source: planet.overview.source,
    });
  };

  const changeInfo = num => {
    if (currentInfo === num && num > 3) return;
    if (num === 1) {
      setCurrentInfo({
        num: 1,
        content: currentPlanet.overview.content,
        source: currentPlanet.overview.source,
      });
    } else if (num === 2) {
      setCurrentInfo({
        num: 2,
        content: currentPlanet.structure.content,
        source: currentPlanet.structure.source,
      });
    } else if (num === 3) {
      setCurrentInfo({
        num: 3,
        content: currentPlanet.geology.content,
        source: currentPlanet.geology.source,
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentPlanet,
        currentInfo,
        changePlanet,
        changeInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
