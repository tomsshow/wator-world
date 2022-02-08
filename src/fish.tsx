import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface State {
  fBreed: number;
  fMove: number;
}
interface Props {}

export default class WatorFish extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
        fBreed: 0,
        fMove: 0
    };
  }

  render() {
   

    return (
      <div className="wator-fish">
        <div className="container">
          🐟
      </div>  
      </div>
    );
  }
}

customElements.define(
  "wator-fish",
  reactToWebComponent(WatorGrid, React, ReactDOM)
);
