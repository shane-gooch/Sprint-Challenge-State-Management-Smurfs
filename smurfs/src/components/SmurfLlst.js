import React, { useEffect } from "react";

import "semantic-ui-css/semantic.min.css";
import { Button } from "semantic-ui-react";

export default function SmurfList(props) {
  useEffect(() => {
    const fetch = props.fetchSmurfs;
    fetch();
  }, []);
  return (
    <div key="smurfsList">
      {props.smurfs &&
        props.smurfs.map(smurf => {
          return (
            <div key={smurf.id} className="smurf">
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <Button color="red" onClick={() => props.deleteSmurf(smurf.id)}>
                x
              </Button>
              <Button color="blue" onClick={() => props.editSmurf(smurf)}>
                Update
              </Button>
            </div>
          );
        })}
    </div>
  );
}
