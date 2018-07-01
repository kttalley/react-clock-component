class Clock extends React.Component {
    constructor(props) { //pass in object properties
        super(props); //make passed in object parent of this class
        this.state = {date: new Date()};
    }

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