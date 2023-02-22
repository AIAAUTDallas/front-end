import styles from "../styles/Org.module.css";

export default function Org() {
    return (
        <div style={{ padding: "20px" }}>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', fontFamily: "'chivo', 'sans-serif'"}}>
                <h1>Aerospace Organizations</h1>
                <div style={{display: 'flex', justifyContent: 'center', flex: '1'}}>
                    <div className={styles.orgContainers}>
                        <img className={styles.image} src="/AIAA_Banner.png"></img>
                        <h1>American Institute of Aeronautics & Astronautics (AIAA)</h1>
                    </div>
                    <div className={styles.orgContainers}>
                        <img className={styles.image} src="/DBF_Logo.png"></img>
                        <h1>Design Build Fly (DBF)</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}