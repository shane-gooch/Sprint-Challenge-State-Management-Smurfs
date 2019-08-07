import React, { useState, useEffect } from "react";

import "semantic-ui-css/semantic.min.css";
import { Input, Button } from "semantic-ui-react";

export default function SmurfForm(props) {
  const [resetForm] = useState({
    name: "",
    age: "",
    height: ""
  });
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: ""
  });

  const changeHandler = e => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const addSmurf = (e, formData) => {
    console.log(formData);
    e.preventDefault();
    props.addSmurf(e, formData);
    setFormData(resetForm);
  };
  const sendUpdateSmurf = (e, formData) => {
    e.preventDefault();
    props.sendUpdateSmurf(formData);
    setFormData(resetForm);
  };

  useEffect(() => {
    setFormData(props.smurfToEdit);
  }, [props.smurfToEdit]);

  return (
    <div className="smurfForm">
      <form
        onSubmit={
          props.smurfToEdit
            ? e => sendUpdateSmurf(e, formData)
            : e => addSmurf(e, formData)
        }
      >
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formData.name}
          onChange={changeHandler}
          required
        />
        <Input
          type="text"
          name="age"
          placeholder="Enter age"
          value={formData.age}
          onChange={changeHandler}
          required
        />
        <Input
          type="text"
          name="height"
          placeholder="Enter height"
          value={formData.height}
          onChange={changeHandler}
          required
        />
        <Button color="blue">
          {props.smurfToEdit ? "Update Smurf" : "Add Smurf"}
        </Button>
      </form>
    </div>
  );
}
