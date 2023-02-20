import React from "react";
import { Card } from "react-bootstrap";

const MemberCard = ({ name, title, location, department }) => {

    return (
        <Card
            className="Card-info"
            size="sm"
            style={{ width: "150px", margin: "50px", border: "none" }}
        >
            <Card.Body>
                <Card.Text style={{ display: "grid", color: "black" }}>
                    <h2 style={{ fontSize: "20px" }}>{name}</h2>
                    <h3 style={{ fontSize: "15px" }}>{title}</h3>
                    <h3 style={{ fontSize: "15px" }}>{location}</h3>
                    <h3 style={{ fontSize: "15px" }}>{department}</h3>
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default MemberCard;
