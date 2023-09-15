import Introduction from './Introduction';
import Slider from './Slider';
import Project from './Branches';
import Branches from './Branches';
import Sponsor from './Sponsor';
import Head from 'next/head';

const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Home | American Institute of Aeronautics and Astronautics</title>
      </Head>
      <div>
        <Slider />
        <Introduction />
        <Branches />
        <Sponsor />
        {/* <Partner /> */}
      </div>
    </>
  );
};

export default HomeScreen;
