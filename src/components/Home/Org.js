import styles from "../../styles/Org.module.css";

export default function Org() {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', fontFamily: "'chivo', 'sans-serif',",}}>
                <h1>Projects</h1>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div className={styles.orgContainers}>
                        <img className={styles.image} src="/public/projects/DARRT_Logo_V2.PNG"></img>
                        <h1>Drone Applications Research And Racing Team (DARRT)</h1>
                    </div>
                    <div className={styles.orgContainers}>
                        <img className={styles.image} src="/public/projects/CR_Logo.PNG"></img>
                        <h1>Comet Rocketry (CR)</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}