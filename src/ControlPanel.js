import React, {Component} from 'react'
import Counter from './Counter'

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.onCounterUpdate = this.onCounterUpdate.bind(this);

        this.initValue = [0, 10, 20];
        const initSum = this.initValue.reduce((a,b) => a+b, 0);

        this.state = {
            sum: initSum
        }
    }

    onCounterUpdate(newValue, prevValue) {
        const valueChange = newValue - prevValue;
        this.setState({
            sum: this.state.sum + valueChange
        })
    }

    render () {
        return (
            <div>
                <Counter caption='First' initValue={this.initValue[0]} onUpdate={this.onCounterUpdate} />
                <Counter caption='Second' initValue={this.initValue[1]} onUpdate={this.onCounterUpdate} />
                <Counter caption='Third' initValue={this.initValue[2]} onUpdate={this.onCounterUpdate} />
                <div>Total Count: {this.state.sum}</div>
                
            </div>
        );
    }
}

export default ControlPanel;