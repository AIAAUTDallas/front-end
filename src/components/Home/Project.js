import styles from "../../styles/Project.module.css";

export default function Project() {
    return (
        <div className="p-[20px] flex justify-center content-center">
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', fontFamily: "'chivo', 'sans-serif',",}}>
                <h1>Projects</h1>
                <div style={{display: 'flex', paddingTop: '2rem', justifyContent: 'space-around', flexWrap: 'wrap'}} className="justify-center">
                    <div className={styles.projectContainers}>
                        <img className={styles.image} src="/projects/DARRT_Logo_V2.PNG"></img>
                        <h1>Drone Applications Research And Racing Team (DARRT)</h1>
                    </div>
                    <div className={styles.projectContainers}>
                        <img className={styles.image} src="/projects/CR_Logo.PNG"></img>
                        <h1>Comet Rocketry (CR)</h1>
                    </div>
                    <div className={styles.projectContainers}>
                        <img className={styles.image} src="/projects/RAD_Logo.png"/>
                        <h1>Research Aerospace Design (RAD)</h1>
                    </div>
                    <div className={styles.projectContainers}>
                        <img className={styles.image} src="/projects/DBF_Logo.png"/>
                        <h1>Design Build Fly (DBF)</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}