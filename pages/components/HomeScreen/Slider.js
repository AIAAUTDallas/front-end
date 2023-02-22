import styles from "../styles/Slider.module.css";
import { Carousel } from "react-bootstrap";
export default function Slider() {
    return (<>
        <div className={styles.container}>
            <Carousel interval={7000} controls={false} className={styles.carousel}>
                <Carousel.Item>
                    <img className={styles.image} src="AIAA_067_Instagram.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={styles.image} src="AIAA_074_Instagram.png"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={styles.image} src="AIAA_076_Instagram.png"/>
                </Carousel.Item>
            </Carousel>
        </div>
    </>);
}