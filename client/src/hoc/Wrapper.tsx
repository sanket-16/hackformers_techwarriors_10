import Navbar from '@components/Navbar';

const Wrapper = (Component: React.FC) =>
  function HOC() {
    return (
      <section className="md:px-20 px-10 bg-almost-black text-white min-h-screen min-w-screen">
        <Navbar />
        <Component />
      </section>
    );
  };

export default Wrapper;
