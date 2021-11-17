import React, { Fragment } from "react";
import usePolling from "./usePolling";
import ReactDOM from "react-dom";
import "./styles.css";
import Button from "./button";

const ApiPolling = () => {
  const [isPolling, startPolling, stopPolling, cleanup] = usePolling(
    {
      url: "https://pokeapi.co/api/v2/pokemon?limit=1&offset=1",
      interval: 3000, // in milliseconds(ms)
      retryCount: 3, // this is optional
      counter: 0,
      onSuccess: (response) => {
        console.log("POKEMON : ", response.results[0].name);
        //if (response.results.length === 0) return true;
        //return false;
        return true;
      },
      onFailure: () => {
        console.log("handle failure");
      }, // this is optional
      method: "GET"
    }
    //headers={headers object} // this is optional
    //body={JSON.stringify(data)} // data to send in a post call. Should be stringified always
  );

  return (
    <div className="App">
      <h2 className="heading">API Polling Demo</h2>
      {isPolling ? (
        <Fragment>
          <div className="startHead"> I have started polling !</div>
          <Button style="startBtn" onClick={stopPolling} text="Stop Polling" />
        </Fragment>
      ) : (
        <Fragment>
          <div className="stopHead">I have stopped polling !</div>
          <Button style="stopBtn" onClick={startPolling} text="Start Polling" />
        </Fragment>
      )}
      <Button style="stopBtn" onClick={cleanup} text="Cleanup" />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<ApiPolling />, rootElement);
