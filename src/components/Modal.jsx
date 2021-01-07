import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Detail from "./Detail";

function Modal() {
  let history = useHistory();
  let { id } = useParams();

  function back(event) {
    event.stopPropagation();
    history.goBack();
  }

  return (
    <div onClick={back}>
      <div className="overlay" />
      <div className="modal">
        <button onClick={back}>&times;</button>
        <Detail id={id} />
      </div>
    </div>
  );
}

export default Modal;
