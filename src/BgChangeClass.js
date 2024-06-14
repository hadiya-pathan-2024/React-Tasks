import React from "react";
class BgChangeClass extends React.Component {
    constructor() {
        super()
        this.state = {
          count: 0
        }
      }
    render() {
      // console.log("this: ",this.props)
      const {name} = this.props;
      return (
        <>
        <div>
          <h2>This is {name} colour</h2>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <button className="rounded bg-blue-400 px-4 py-1" onClick={() => this.setState({count: this.state.count - 1})}> - </button>
          <h2>{this.state.count}</h2>
          <button className="rounded bg-blue-400 px-4 py-1" onClick={() => this.setState({count: this.state.count + 1})}> + </button>
        </div>
        </>
      );
    }
  }
  
export default BgChangeClass; 
