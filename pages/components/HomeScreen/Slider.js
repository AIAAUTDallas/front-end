import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/Slider.module.css";
import { Carousel } from "react-responsive-carousel";
// import hi from "../../../public/"
const Slider = () => {
    return (<>
        <div className={styles.container}>
            <Carousel className={styles.carousel}>
                {/* <div> */}
                    {/* figure out how to center images within carousel */}
                    <img style={{marginTop: '5%'}} src="background.jpg"/>
                    <img src="AIAA_SpringKickoff_009.jpg"/>
                {/* </div> */}
            </Carousel>
        </div>
    </>);
}

export default Slider