import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [photo, setPhoto] = useState("");

  function handleClick() {
    let newContact = {
      name,
      lastName,
      photo,
      id: Date.now(),
    };
    props.handleNewContact(newContact);
    setName("");
    setLastName("");
    setPhoto("");
  }

  return (
    <div>
      <div className="addContact">
        <h1 id="addContact_h">Contact Book ☏</h1>
        <input
          className="addContactInputs"
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
          value={name}
        />
        <input
          className="addContactInputs"
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          value={lastName}
        />
        <input
          className="addContactInputs"
          onChange={(e) => setPhoto(e.target.value)}
          type="url"
          placeholder="URL Photo"
          value={photo}
        />
        <button id="addContactBtn" onClick={handleClick}>
          Add contact
        </button>
      </div>
    </div>
  );
};

export default AddContact;
