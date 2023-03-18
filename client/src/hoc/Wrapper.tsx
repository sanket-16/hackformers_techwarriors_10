import Navbar from '@components/Navbar';

const Wrapper = (Component: React.FC) =>
  function HOC() {
    return (
      <section className="md:px-40 px-20 bg-almost-black text-white min-h-screen min-w-screen">
        <Navbar />
        <Component />
      </section>
    );
  };

export default Wrapper;
