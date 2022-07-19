import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-[#070724]">
        <Navbar />
        <div className="container">
          <h4 className="mt-5 font-bold text-5xl">Content Here</h4>
        </div>
      </div>
    </>
  );
}
