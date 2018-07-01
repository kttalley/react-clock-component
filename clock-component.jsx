class Clock extends React.Component {
    constructor(props) { //pass in object properties
        super(props); //make passed in object parent of this class
        this.state = {date: new Date()};
    }
    //set up a timer whenever the clock is rendered.
    //aka mounting
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    //clear that timer whenever the dom produced by
    //the clock is removed. aka unmounting.    
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({ //schedules updates to the component local state.
            date: new Date()
        });
    }

    //^^^lifecycle hooks are the methods above

    render() {
        return (
            <div>
                <h1> Hullo Github</h1>
                <h2> 
                    It is {this.state.date.toLocaleTimeString()}.
                </h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('clock-display')
);

/*
1.When <Clock /> is passed to ReactDOM.render(),
  React calls the constructor of the Clock component.
  Since Clock needs to display the current time, 
  it initializes this.state with an object including 
  the current time. We will later update this state.

2. React then calls the Clock component’s render() method.
   This is how React learns what should be displayed on 
   the screen. React then updates the DOM to match the Clock’s
   render output.

3. When the Clock output is inserted in the DOM, React 
   calls the componentDidMount() lifecycle hook. Inside 
   it, the Clock component asks the browser to set up a 
   timer to call the component’s tick() method once a 
   second.

4. Every second the browser calls the tick() method. Inside 
   it, the Clock component schedules a UI update by calling 
   setState() with an object containing the current time. 
   Thanks to the setState() call, React knows the state has 
   changed, and calls the render() method again to learn what 
   should be on the screen. This time, this.state.date in the 
   render() method will be different, and so the render output 
   will include the updated time. React updates the DOM 
   accordingly.

5. If the Clock component is ever removed from the DOM, React 
   calls the componentWillUnmount() lifecycle hook so the timer
   is stopped.



   Using State Correctly 

    Do not modify state directly

    //wrong
    this.state.comment = 'Hello';
    
    //correct
    this.setState({ comment: 'Hello' });

    //the only place you can assign this.state is the constructor.

    //state updates maybe asynchronus
    React may batch multiple setState() calls into a single
    update for performance.
    Because this.props and this.state may be updated asynchronously,
    you should not rely on their values for calculating the next state.

    For example, this code may fail to update the counter:

    //wrong
    this.setState({
        counter: this.state.counter + this.props.increment,
    });


    //correct
    this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
    }));

*/