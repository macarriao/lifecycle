import React from "react";
import { Counter } from "./components/Counter/Counter";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showCounter: false // boolean
    }
  }

  render(){
    return (
      <div>
        <h1>React Lifecycle</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter })
          }}
        >
          { this.state.showCounter ? 'Remove Counter' : 'Show Counter'}
        </button>

     {this.state.showCounter ? <Counter /> : null} 
{/*  {this.state.showCounter && <Counter />} equivalent to the next sentence. First one is the best one as it is recommended to have null if you would not like to return anything. */}

      </div>
    );
  }
}

export default App;