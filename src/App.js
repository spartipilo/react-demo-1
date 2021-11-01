import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";
import CardInformation from "./components/CardInformation";

function App() {
  const [info, setInfo] = useState([]);
  const [cap, setCap] = useState("");
  const [status, setStatus] = useState(200);

  //THIS FUNC CONNECTING TO CARDINFORMATION.JS COMPONENT FOR GET VALUE TEXTBOX
  const getCap = (event) => {
    setCap(event.target.value);
  };

  //GET API TO WEB ZIPPOPOTAM.US
  const getApi = () => {
    Axios.get(`https://api.zippopotam.us/it/${cap}`)
      .then((data) => {
        setStatus(data.status);
        const refactorJson = {
          ...data.data,
          post_code: data.data["post code"],
          country_abbreviation: data.data["country abbreviation"],
          place_name: data.data["places"][0]["place name"],
          state_abbreviation: data.data["places"][0]["state abbreviation"],
          state: data.data["places"][0]["state"],
        };
        setInfo(refactorJson);
      })
      .catch(() => {
        /* IF AXIOS CALL IS != 200 THEN SET STATUS 404 AND DISPLAY ME 
        ERROR MESSAGE (CARDINFORMATION.JS) */
        setStatus(404);
      });
  };

  return (
    <div>
      <CardInformation
        {...info}
        getCap={getCap}
        valueCap={cap}
        getApi={getApi}
        status={status}
      />
    </div>
  );
}

export default App;
