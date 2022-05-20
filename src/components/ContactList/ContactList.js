import React from "react";
import { Button, Card } from "react-bootstrap";
import "./ContactList.css";

const ContactList = (props) => {
  return (
    <div className="contactList d-flex justify-content-between">
      {props.contacts.map((item, index) => (
        <Card style={{ width: "18rem", margin: "10px" }}>
          <Card.Img src={item.photo} alt={item.name} className="imgContact" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.lastName}</Card.Text>
            <div className="contactListBtnCon">
              <Button
                id="btn1"
                className="contactListBtn"
                variant="danger"
                onClick={() => props.handleDeleteContact(item.id)}
              >
                Delete
              </Button>
              <Button
                id="btn2"
                className="contactListBtn"
                variant="warning"
                margin="5px"
                onClick={() => props.handleEditIndex(index)}
              >
                Edit
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ContactList;
