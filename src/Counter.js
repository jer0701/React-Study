import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: props.initValue
        }
    }
    onClickIncrementButton() {
        this.updateCount(true);
    }

    onClickDecrementButton() {
        this.updateCount(false);
    }

    updateCount(isIncrement) {
        const prevValue = this.state.count;
        const newValue = isIncrement ? prevValue + 1 : prevValue -1;
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue, prevValue);
    }


    render () {
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}

export default Counter;