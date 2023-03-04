import styles from "../styles/Slider.module.css";
import { Carousel } from "react-bootstrap";
import Image from "next/image";
export default function Slider() {
    return (<>
        <div className={styles.container}> 
        {/* only put pictures that are in 3:2 aspect ratio, or crop to that ratio */}
            <Carousel interval={6000} controls={false} className={styles.carousel}>
                <Carousel.Item>
                    <Image width={800} height={600} className={styles.image} src="/slide1.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={800} height={600} className={styles.image} src="/slide2.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={800} height={600} className={styles.image} src="/slide3.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={800} height={600} className={styles.image} src="/slide4.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <Image width={800} height={600} className={styles.image} src="/slide5.jpg"/>
                </Carousel.Item>
            </Carousel>
        </div>
    </>);
}