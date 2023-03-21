import React from 'react';
import Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../styles/Member.module.css';
// import Aadi from '/Aadi_edited.jpg';
// import { Modal } from 'react-bootstrap';

const MemberCard = ({img, name, title, description }) => {
    return (
        <Card className={style.card}>
            <Card.Img variant="top" src={img} className={style.topImg}/>
            <p className={style.cardBody}>
                    <Card.Title style={{ display: "table", color: "white" }}>{name}</Card.Title>
                    <Card.Text style={{ display: "table", color: "white" }}>{title}</Card.Text>
                    <Card.Text style={{ display: "table", color: "white" }}>{description}</Card.Text>
            </p>
        </Card >
    )
}

export default MemberCard
