import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            counter: 0
        }
        console.log("Building Counter class..");
    }
    

    UNSAFE_componentWillMount() { // deprecated, just for learning purpose
        console.log("Counter component is being mounted..");
    }

    componentDidMount () {
        console.log("Counter component was mounted!");

        document.addEventListener('scroll', this.consoleScroll);
    }

    shouldComponentUpdate () { // when a prop or state is updated, this method is called
        return true;
    }

    UNSAFE_componentWillUpdate () { // deprecated, just for learning purpose
        console.log("Counter component will be updated..");
    }

    componentDidUpdate() {
        console.log("Counter components was updated.");
    }

    componentWillUnmount() {
        console.log("Counter component is going to be unmounted...");

        document.removeEventListener('scroll', this.consoleScroll)
    }

    consoleScroll() {
        console.log("Scroling the page");
    }

    render(){
        console.log("Rendering Counter component..");
        return(
            <div>
                <h1>{ this.state.counter }</h1>

                <button
                    onClick={() => this.setState({ counter: this.state.counter - 1 })}
                >
                    Decrease
                </button>
                <button 
                    onClick={ () => this.setState({ counter: this.state.counter + 1 })}
                >
                    Increase
                </button>
            </div>
        )
    }
}