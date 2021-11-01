import React from "react";
import { Alert } from "react-bootstrap";

function MessageError({ textError, typeError, headingError }) {
  return (
    <div>
      <Alert variant={typeError} className="shadow">
        <Alert.Heading>{headingError}</Alert.Heading>
        <p>{textError}</p>
      </Alert>
    </div>
  );
}

export default MessageError;
