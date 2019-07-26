import React, { useState } from "react";

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
  return (
    <div className="smurfForm">
      <form onSubmit={e => props.addSmurf(e, formData)}>
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
        <Button>Add Smurf</Button>
      </form>
    </div>
  );
}
