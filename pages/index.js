import Navbar from '../components/Navbar';
import Planet from '../components/Planet';
import { useAppContext } from '../context/state';

export default function Home() {
  const { currentPlanet } = useAppContext();

  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#070724]">
        <Navbar />
        <div className="container grow flex flex-col">
          <Planet planet={currentPlanet} />
        </div>
      </div>
    </>
  );
}
