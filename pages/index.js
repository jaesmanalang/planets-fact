import Navbar from '../components/Navbar';
import Planet from '../components/Planet';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#070724]">
        <Navbar />
        <div className="container grow flex flex-col">
          <Planet />
        </div>
      </div>
    </>
  );
}
