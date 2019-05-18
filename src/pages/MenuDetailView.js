import React from "react";
import IndexView from "../components/user/menuDetailView/IndexView";

function App(props) {
  return (
    <div>
      <IndexView location={props.location} history={props.history} />
    </div>
  );
}

export default App;
