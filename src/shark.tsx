import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface State {
  sBreed: number;
  sMove: number;
  sStarve: number;
}
interface Props {}

export default class WatorShark extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
        sBreed: 0,
        sMove: 0,
        sStarve: 0
    };
  }

  render() {
   

    return (
      <div className="wator-shark">
        <div className="container">
          🐟
      </div>  
      </div>
    );
  }
}

customElements.define(
  "wator-shark",
  reactToWebComponent(WatorShark, React, ReactDOM)
);
