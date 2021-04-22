import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default class ShowcaseLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      compactType: null,
      mounted: false,
      
    };
    this.y = Math.ceil(Math.random() * 4) + 1;

   
  


  }

  componentDidMount() {
    this.setState({ mounted: true });
  }





  render() {
    return (
      <div>
       
        
      
        <ResponsiveReactGridLayout
           cols= {{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
           
        
         
          rowHeight={30}
          className="layout"
        

         
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={!this.state.compactType}
        >
          <div key="a" data-grid={{x: (Math.random(0, 5)*2) % 12, y: Math.floor(0 / 6)*this.y, w: 3, h: 2, i: "0"}} style={{backgroundColor: "tomato", width: 800,minWidth: 1}}>a</div>
        <div key="b" data-grid={{x: (Math.random(0, 5)*2) % 12, y: Math.floor(1 / 6)*this.y, w: 3, h: 5, i: "1"}} style={{backgroundColor: "tomato", width: 800,minWidth: 1}}>a</div>
        <div key="c" data-grid={{x: (Math.random(0, 5)*2) % 12, y: Math.floor(2 / 6)*this.y, w: 3, h: 8, i: "2"}} style={{backgroundColor: "tomato", width: 800,minWidth: 1}}>a</div>
        <div key="d" data-grid={{x: (Math.random(0, 5)*2) % 12, y: Math.floor(3 / 6)*this.y, w: 3, h: 3, i: "3"}} style={{backgroundColor: "tomato", width: 800,minWidth: 1}}>a</div>
        <div key="e" data-grid={{x: (Math.random(0, 5)*2) % 12, y: Math.floor(2 / 6)*this.y, w: 3, h: 8, i: "2"}} style={{backgroundColor: "tomato", width: 800,minWidth: 1}}>a</div>
   
       
   
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}
