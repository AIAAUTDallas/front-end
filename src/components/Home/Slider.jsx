import styles from "../../styles/Slider.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

import slider1 from "../../../public/slide1.jpg";
import slider2 from "../../../public/slide2.jpg";
import slider3 from "../../../public/slide3.jpg";
import slider4 from "../../../public/slide4.jpg";
import slider5 from "../../../public/slide5.jpg";

export default function Slider() {
    return (<>
        <div className={styles.container}>
            <Carousel interval={6000} controls={false}>
                <Carousel.Item>
                    <Image priority={true} placeholder={"blur"} className="object-cover h-[300px] md:h-[600px]" src={slider1} alt={"AIAA general meeting with a people sitting looking towards the front"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image priority={true} placeholder={"blur"} className="object-cover h-[300px] md:h-[600px]" src={slider2} alt={"AIAA president giving an introduction in the general meeting"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image priority={true} placeholder={"blur"} className="object-cover h-[300px] md:h-[600px]" src={slider3} alt={"AIAA general meeting guest sitting in room"}/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image placeholder={"blur"} className="object-cover h-[300px] md:h-[600px]" src={slider4} alt={"AIAA president talking about the organization to a people"}/>
                </Carousel.Item >
                <Carousel.Item>
                    <Image placeholder={"blur"} className="object-cover h-[300px] md:h-[600px]" src={slider5} alt={"AIAA officer and members having a laugh"} />
                </Carousel.Item>
            </Carousel>
        </div>
    </>);
}