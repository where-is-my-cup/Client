import React from "react";
import IndexView from "../components/user/menuOrderListView/IndexView";

function App(props) {
  return (
    <div>
      <IndexView history={props.history} location={props.location} />
    </div>
  );
}

export default App;
