import React from "react"
import Son1 from './son1'
import Son2 from './son2'

export default class Parent extends React.Component{

    constructor(props){
        super(props)
        this.state={
            money:100
        }
    }

    changeMoney(num){
        this.setState({
            money:this.state.money-num
        })
    }



    render(){
        return(
            <div>
                Parent Money:{this.state.money}
                <Son1 money={this.state.money} changeMoney={this.changeMoney.bind(this)}/>
                <Son2 money={this.state.money} changeMoney={this.changeMoney.bind(this)}/>
            </div>
        )
    }
}