import React, { useEffect } from "react";

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
            <div key={smurf.id}>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <button>x</button>
            </div>
          );
        })}
    </div>
  );
}
