import React from "react";
import { Card } from "react-bootstrap";

const OrgCard = ({ link, name, img, description }) => {
    return (
        <Card
            className="Card-info"
            size="sm"
            style={{ width: "150px", margin: "50px", border: "none" }}
        >
            <a href={link}>
                <Card.Img
                    variant="top"
                    src={img}
                    style={{ width: "100%" }}
                />
            </a>
            <Card.Body>
                <Card.Text style={{ display: "grid", color: "black" }}>
                    <h2 style={{ fontSize: "20px" }}>{name}</h2>
                    <h3 style={{ fontSize: "15px" }}>{description}</h3>
                </Card.Text>
            </Card.Body>
        </Card >
    );
};

export default OrgCard;
