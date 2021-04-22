import React from "react";
import ReactDOM from "react-dom";
import ShowcaseLayout from "./ShowcaseLayout";

class ExampleLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { layout: [] };
    
  }


  render() {
    return (
      <div>
        <ShowcaseLayout />
      </div>
    );
  }
}

export default ExampleLayout;
