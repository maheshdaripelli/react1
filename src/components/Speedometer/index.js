// Write your code here
import './index.css'

import {Component} from 'react'

class Speedometer extends Component{
    state = {count:0}
    onAccelerate = ()=>{
        this.setState((prevState) => ({ count: prevState.count + 10 }))
        if (prevState.count === 200){
            prevState.count = 200
        }
    }
    onApplyBreaks = ()=>{
        this.setState((prevState) => ({ count: prevState.count - 10 }))
        if (prevState.count === 0){
            prevState.count = 0
        }
    }    
    render(){
        const{count} = this.state
        return(
            <div className="bg">
                <h1 className="h1">SPEEDOMETER</h1>
                <p>Speed is <span>{count}</span>mph</p>
                <p>Min Limit is 0mph,Max Limit is 200mph</p>
                <div>
                    <button className="button1" onClick={onAccelerate}>Accelerate</button>
                    <button className="button2" onClick={onApplyBreaks}>Accelerate</button>
                </div>
            </div>
        )
    }
}
export default Speedometer