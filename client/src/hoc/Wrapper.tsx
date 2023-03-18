import Navbar from '@components/Navbar';

const Wrapper = (Component: React.FC) =>
  function HOC() {
    return (
      <section className="md:mx-20 mx-10">
        <Navbar />
        <Component />
      </section>
    );
  };

export default Wrapper;
