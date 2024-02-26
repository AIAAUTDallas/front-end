import styles from '../../styles/Slider.module.css';
import {Carousel} from 'react-bootstrap';
import Image from 'next/image';

import slider1 from '../../../public/carousel/slide1.jpg';
import slider2 from '../../../public/carousel/slide2.jpg';
import slider3 from '../../../public/carousel/slide3.jpg';
import slider4 from '../../../public/carousel/slide4.jpg';
import slider5 from '../../../public/carousel/slide5.jpg';

export default function Slider() {
  return (
    <>
      <div className={styles.container}>
        <Carousel interval={6000} controls={false} className="brightness-50">
          <Carousel.Item>
            <Image
              priority={true}
              placeholder={'blur'}
              className="object-cover h-[92svh]"
              src={slider1}
              alt={
                'AIAA general meeting with a people sitting looking towards the front'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              priority={true}
              placeholder={'blur'}
              className="object-cover h-[92svh]"
              src={slider2}
              alt={
                'AIAA president giving an introduction in the general meeting'
              }
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              priority={true}
              placeholder={'blur'}
              className="object-cover h-[92svh]"
              src={slider3}
              alt={'AIAA general meeting guest sitting in room'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              priority={true}
              placeholder={'blur'}
              className="object-cover h-[92svh]"
              src={slider4}
              alt={'AIAA president talking about the organization to a people'}
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              priority={true}
              placeholder={'blur'}
              className="object-cover h-[92svh]"
              src={slider5}
              alt={'AIAA officer and members having a laugh'}
            />
          </Carousel.Item>
        </Carousel>
        <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 font-chivo italic text-3xl uppercase">
          The American Institute of Aeronautics and Astronautics at UTD
        </h1>
      </div>
    </>
  );
}
