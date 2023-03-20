import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Introduction = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>AIAA and Who We Are!</h1>

          <p>
            The American Institute of Aeronautics and Astronautics (AIAA) is the
            principal society of aerospace engineers and scientists. At the
            University of Texas at Dallas (UTD), we are a project-based student
            organization hosting technical and professional activities to
            prepare students for a career in the aerospace industry. From
            aircraft and drones to rockets and wind turbines, AIAA UTD provides
            aspiring aerospace engineers the opportunity to build engineering
            experience even on a campus without an aerospace major. We also
            offer student mentorships, guest lectures, company tours, and
            networking events. Students of all majors and years are welcome to
            join!
          </p>
          <Link className={styles.link} href='/screens/TeamScreen'>
          <Button>Meet The Officers</Button>
          </Link>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>History Of AIAA</h1>
          <Button>More Detail</Button>
        </Col>
        <Col>
      <img src='/AIAA_Logo.png' alt='AIAA_Logo'/>
        </Col>
      </Row>

      <Row>
        <Col>
        <img src='/DARRT.png' alt='DARRT_Logo'/>
        </Col>
        <Col>
          <h1>Drone Applications Research & Racing Team</h1>
          <p>
            A year-long project focused on the production of drones. As the main
            aerial robotics component of AIAA UTD, members can build and fly
            cargo, recreational, or racing drones. DARRT is a flexible project
            with the option of participating as a group to build team drones or
            individually to build personal drones. Flight days give participants
            the chance to demonstrate their designs. This project serves as an
            opportunity for members to apply their knowledge in programming,
            circuitry, and sensors in pursuit of advancing aerial robotics and
            autonomous control. DARRT paves the way for collegiate drone
            competitions in the future.
          </p>
          <Button>More Detail</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Introduction;
