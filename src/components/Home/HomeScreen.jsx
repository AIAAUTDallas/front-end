import Introduction from './Introduction';
import Branches from './Branches';
import Sponsor from './Sponsor';
import Head from 'next/head';
import HeaderVideo from './HeaderVideo';

const HomeScreen = () => {
  return (
    <>
      <Head>
        <title>Home | American Institute of Aeronautics and Astronautics</title>
      </Head>
      <div>
        <HeaderVideo />
        <Introduction />
        <Branches />
        <Sponsor />
        {/* <Partner /> */}
      </div>
    </>
  );
};

export default HomeScreen;
