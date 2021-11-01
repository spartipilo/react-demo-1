import React from "react";
import { Card } from "react-bootstrap";

function CardText({
  post_code,
  place_name,
  state_abbreviation,
  state,
  country,
}) {
  return (
    <div>
      {country !== undefined ? (
        <Card.Text>
          {`Con il codice postale ${post_code} corrisponde alla città ${place_name} situato in ${state}
                ${
                  state_abbreviation !== ""
                    ? "(" + state_abbreviation + ")"
                    : ""
                }`}
        </Card.Text>
      ) : (
        <Card.Text>
          Usa la ricerca che trovi in alto per cercare la città con il CAP
          corrispondente
        </Card.Text>
      )}
    </div>
  );
}

export default CardText;
