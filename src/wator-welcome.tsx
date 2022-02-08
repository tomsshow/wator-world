import React, { useState } from 'react';
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

class WatorWelcome extends React.Component {
    constructor() {
        super();
        const [gridHeight, gridWidth] = useState(0);
    }

    render() {
        return (
            <div>
                <h1>Welcome to Wa' Tor World!</h1>
                <form>
                    <fieldset>
                        <legend>Enter your desired parameter values for your Wa' Tor World</legend>
                        <div>
                            <label>What is the height of your world?</label>
                            <input type="number" id="gridHeight" />
                            <label>What is the width of your world?</label>
                            <input type="number" id="gridWidth" />
                        </div>
                        <div>
                            <p>fish question place holder</p>
                        </div>
                        <div>
                            <p>shark question place holder</p>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

customElements.define('wator-welcome', reactToWebComponent(WatorWelcome, React, ReactDOM));