import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

interface State {
  count: number;
}
interface Props {}

export default class WatorGrid extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  render() {
    const styles = `.container {
  display: grid;
  grid-template-columns: 1rem 1rem 1rem;
  grid-gap: 1rem;
}`;

    return (
      <div className="wator-grid">
        <style>{styles}</style>
        <div className="container">
          <div className="item">1</div>
          <div className="item">2</div>
          <div className="item">3</div>
          <div className="item">4</div>
          <div className="item">5</div>
          <div className="item">6</div>
          <div className="item">7</div>
          <div className="item">8</div>
          <div className="item">9</div>
      </div>  
      </div>
    );
  }
}

customElements.define(
  "wator-grid",
  reactToWebComponent(WatorGrid, React, ReactDOM)
);
