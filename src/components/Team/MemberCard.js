import React from 'react';
import Card  from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from '../../styles/Member.module.css';


const MemberCard = ({img, name, title, description }) => {
    return (
        <Card className={style.card}> 
        {
            img && <Card.Img priorty={true} placehold={"blur"} variant="top" src={img} className={style.topImg} alt={name} />
        }
            <p className={style.cardBody}>
                    <Card.Title style={{ display: "table", color: "white" }}>{name}</Card.Title>
                    <Card.Text style={{ display: "table", color: "white" }}>{title}</Card.Text>
                    <Card.Text style={{ display: "table", color: "white" }}>{description}</Card.Text>
            </p>
        </Card >
    )
}

export default MemberCard
