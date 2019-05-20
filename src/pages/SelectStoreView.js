import React from "react";
import IndexView from "../components/user/selectStore/IndexView";

function App(props) {
  return (
    <div>
      <IndexView history={props.history} />
    </div>
  );
}

export default App;
