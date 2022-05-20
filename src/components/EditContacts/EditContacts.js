import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./EditContacts.css";
const EditContacts = (props) => {
  let [name, setName] = useState(props.editContact.name);
  let [lastName, setLastName] = useState(props.editContact.lastName);
  let [photo, setPhoto] = useState(props.editContact.photo);

  function handleSaveClick() {
    let contact = { ...props.editContact };
    contact.name = name;
    contact.lastName = lastName;
    contact.photo = photo;
    props.handleSaveEditedContact(contact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div className="EditModal">
      <div>
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>Редактирование</Modal.Title>
          </Modal.Header>

          <Modal.Body className="inpEdit">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              value={name}
            />
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              value={lastName}
            />
            <input
              onChange={(e) => setPhoto(e.target.value)}
              type="text"
              placeholder="URL Photo"
              value={photo}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleSaveClick} variant="warning">
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};

export default EditContacts;
