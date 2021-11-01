import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Card } from "react-bootstrap";
import CardText from "./CardText";
import MessageError from "./MessageError";

function CardInformation({
  country,
  post_code,
  country_abbreviation,
  place_name,
  state,
  state_abbreviation,
  getCap,
  valueCap,
  getApi,
  status,
}) {
  return (
    <article className="d-flex flex-column align-items-center">
      <div className="d-flex flex-column position-relative my-4 w-25">
        <input
          type="text"
          className="shadow text-center my-4 py-2 w-100 border-0"
          onChange={getCap}
          value={valueCap}
          placeholder="Inserisci un CAP italiano..."
        />
        <Button variant="primary" className="shadow" onClick={getApi}>
          Trova città
        </Button>
      </div>

      {status === 200 ? (
        <div>
          <Card style={{ width: "18rem" }} className="shadow">
            <Card.Body>
              <Card.Title>
                {country === undefined
                  ? "Cerca tramite CAP"
                  : `${country} (${country_abbreviation})`}
              </Card.Title>
              <CardText
                post_code={post_code}
                place_name={place_name}
                state={state}
                state_abbreviation={state_abbreviation}
                country={country}
              />
            </Card.Body>
          </Card>
        </div>
      ) : (
        <MessageError
          textError="Il CAP non esiste! Prova a fare un'altra ricerca."
          typeError="danger"
          headingError="Errore!"
        />
      )}
    </article>
  );
}

export default CardInformation;
