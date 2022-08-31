import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Planet from '../components/Planet';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#070724] overflow-hidden">
        <Navbar />

        <div className="md:hidden h-[50px] border-b border-b-slate-800">
          <div className="container h-full flex items-center justify-between">
            <Button isMobile title="OVERVIEW" num="1" />
            <Button isMobile title="STRUCTURE" num="2" />
            <Button isMobile title="SURFACE" num="3" />
          </div>
        </div>
        <div className="container grow flex flex-col">
          <Planet />
        </div>
      </div>
    </>
  );
}
