import Wrapper from '@hoc/Wrapper';
import hero from '../assets/hero.svg';
const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col mt-20 md:flex-row justify-between items-center">
      <h1 className="my-20 font-bold text-5xl ">Connect with people easily.</h1>
      <img src={hero} alt="hero_img" className="text-white w-80" />
    </div>
  );
};

export default Wrapper(LandingPage);
